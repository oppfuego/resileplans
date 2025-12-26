import { AlertColor } from "@mui/material/Alert";

export type SignUpType = "user" | "copywriter";

export const signUpInitialValues = {
    name: "",
    email: "",
    password: "",
    terms: false,
    signupType: "user" as SignUpType,
};

type SignUpErrors = {
    name?: string;
    email?: string;
    password?: string;
    terms?: string;
};

export const signUpValidation = (values: typeof signUpInitialValues) => {
    const errors: SignUpErrors = {};

    if (!values.name) errors.name = "Required";
    if (!values.email) errors.email = "Required";
    if (!values.password) errors.password = "Required";
    if (!values.terms)
        errors.terms = "You must agree to the Terms and Conditions";

    return errors;
};

export const signUpOnSubmit = async (
    values: typeof signUpInitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        // 🔐 стандартна реєстрація (БЕЗ змін)
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok || !data?.user) {
            showAlert(data?.message || "Registration failed", "", "error");
            return;
        }

        // ✉️ SIDE-EFFECT ТІЛЬКИ ДЛЯ COPYWRITER
        if (values.signupType === "copywriter") {
            await fetch("/api/copywriter-notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
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