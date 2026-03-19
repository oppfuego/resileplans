import { AlertColor } from "@mui/material/Alert";
import { isAllowedCountry } from "@/resources/countries";

export type SignUpType = "user" | "copywriter";

export interface SignUpValues {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    street: string;
    city: string;
    country: string;
    postCode: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    signupType: SignUpType;
}

export const signUpInitialValues: SignUpValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    country: "",
    postCode: "",
    password: "",
    confirmPassword: "",
    terms: false,
    signupType: "user",
};

type SignUpErrors = Partial<Record<keyof SignUpValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DOB_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function getTrimmedValue(value: string) {
    return value.trim();
}

function isRealDate(value: string) {
    if (!DOB_REGEX.test(value)) return false;

    const parsed = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(parsed.getTime())) return false;

    return parsed.toISOString().slice(0, 10) === value;
}

export const signUpValidation = (values: SignUpValues) => {
    const errors: SignUpErrors = {};

    if (!getTrimmedValue(values.firstName)) errors.firstName = "First name is required";
    if (!getTrimmedValue(values.lastName)) errors.lastName = "Last name is required";

    const dateOfBirth = getTrimmedValue(values.dateOfBirth);
    if (!dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required";
    } else if (!isRealDate(dateOfBirth)) {
        errors.dateOfBirth = "Enter a valid date of birth";
    } else if (new Date(`${dateOfBirth}T00:00:00.000Z`) > new Date()) {
        errors.dateOfBirth = "Date of birth cannot be in the future";
    }

    const email = getTrimmedValue(values.email);
    if (!email) {
        errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = "Enter a valid email address";
    }

    if (!getTrimmedValue(values.phoneNumber)) {
        errors.phoneNumber = "Phone number is required";
    }

    if (!getTrimmedValue(values.street)) errors.street = "Street is required";
    if (!getTrimmedValue(values.city)) errors.city = "City is required";

    const country = getTrimmedValue(values.country);
    if (!country) {
        errors.country = "Country is required";
    } else if (!isAllowedCountry(country)) {
        errors.country = "Select a supported country";
    }

    if (!getTrimmedValue(values.postCode)) errors.postCode = "Post code is required";

    if (!values.password) {
        errors.password = "Password is required";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm your password";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (!values.terms) errors.terms = "You must agree to the Terms and Conditions";

    return errors;
};

export const signUpOnSubmit = async (
    values: SignUpValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const payload = {
            firstName: getTrimmedValue(values.firstName),
            lastName: getTrimmedValue(values.lastName),
            dateOfBirth: values.dateOfBirth,
            email: getTrimmedValue(values.email),
            phoneNumber: getTrimmedValue(values.phoneNumber),
            street: getTrimmedValue(values.street),
            city: getTrimmedValue(values.city),
            country: getTrimmedValue(values.country),
            postCode: getTrimmedValue(values.postCode),
            password: values.password,
        };

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok || !data?.user) {
            showAlert(data?.message || "Registration failed", "", "error");
            return;
        }

        if (values.signupType === "copywriter") {
            await fetch("/api/copywriter-notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        }

        showAlert(
            "Registration successful!",
            values.signupType === "copywriter"
                ? "We’ll contact you by email shortly."
                : "",
            "success"
        );

        router.replace("/");
        router.refresh();
    } catch (e: any) {
        showAlert(e?.message || "Network error", "", "error");
    } finally {
        setSubmitting(false);
    }
};
