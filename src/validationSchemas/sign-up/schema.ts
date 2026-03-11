import { AlertColor } from "@mui/material/Alert";

export type SignUpType = "user" | "copywriter";

export const signUpInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    addressStreet: "",
    addressCity: "",
    addressCountry: "",
    addressZip: "",
    terms: false,
    signupType: "user" as SignUpType,
};

type SignUpErrors = Partial<Record<keyof typeof signUpInitialValues, string>>;

export const signUpValidation = (values: typeof signUpInitialValues) => {
    const errors: SignUpErrors = {};

    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.email) errors.email = "Required";
    if (!values.password) errors.password = "Required";
    if (!values.phone) errors.phone = "Required";
    if (!values.addressStreet) errors.addressStreet = "Required";
    if (!values.addressCity) errors.addressCity = "Required";
    if (!values.addressCountry) errors.addressCountry = "Required";
    if (!values.addressZip) errors.addressZip = "Required";
    if (!values.terms) errors.terms = "You must agree to the Terms and Conditions";

    return errors;
};

export const signUpOnSubmit = async (
    values: typeof signUpInitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                phone: values.phone,
                addressStreet: values.addressStreet,
                addressCity: values.addressCity,
                addressCountry: values.addressCountry,
                addressZip: values.addressZip,
            }),
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
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    addressStreet: values.addressStreet,
                    addressCity: values.addressCity,
                    addressCountry: values.addressCountry,
                    addressZip: values.addressZip,
                }),
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