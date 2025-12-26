"use client";

import { Formik } from "formik";
import { useState } from "react";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit,
} from "@/validationSchemas/sign-up/schema";
import FormUI from "@/components/ui/form/FormUI";
import styles from "./SignUpPage.module.scss";

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const [type, setType] = useState<"user" | "copywriter">("user");

    return (
        <div className={styles.signUpWrapper}>
            {/* 🔘 SIGN UP TYPE TOGGLE */}
            <div className={styles.toggleWrapper}>
                <button
                    type="button"
                    className={`${styles.toggleBtn} ${
                        type === "user" ? styles.active : ""
                    }`}
                    onClick={() => setType("user")}
                >
                    User
                </button>

                <button
                    type="button"
                    className={`${styles.toggleBtn} ${
                        type === "copywriter" ? styles.active : ""
                    }`}
                    onClick={() => setType("copywriter")}
                >
                    Copywriter
                </button>
            </div>

            <Formik
                enableReinitialize
                initialValues={{ ...signUpInitialValues, signupType: type }}
                validate={signUpValidation}
                onSubmit={(values, helpers) =>
                    signUpOnSubmit(values, helpers, showAlert, router)
                }
            >
                {({ isSubmitting }) => (
                    <FormUI
                        title="Sign Up"
                        description={
                            type === "copywriter"
                                ? "Apply as a copywriter — we’ll contact you by email"
                                : "Create your account"
                        }
                        isSubmitting={isSubmitting}
                        fields={[
                            { name: "name", type: "text", placeholder: "Name" },
                            { name: "email", type: "email", placeholder: "Email" },
                            { name: "password", type: "password", placeholder: "Password" },
                        ]}
                        submitLabel={
                            type === "copywriter"
                                ? "Sign Up & Apply"
                                : "Sign Up"
                        }
                        showTerms
                    />
                )}
            </Formik>
        </div>
    );
}
