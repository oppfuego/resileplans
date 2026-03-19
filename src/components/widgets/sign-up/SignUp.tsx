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
import { COUNTRY_OPTIONS } from "@/resources/countries";

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const [type, setType] = useState<"user" | "copywriter">("user");

    return (
        <div className={styles.signUpWrapper}>
            <div className={styles.toggleWrapper}>
                <button
                    type="button"
                    className={`${styles.toggleBtn} ${type === "user" ? styles.active : ""}`}
                    onClick={() => setType("user")}
                >
                    User
                </button>

                <button
                    type="button"
                    className={`${styles.toggleBtn} ${type === "copywriter" ? styles.active : ""}`}
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
                            {
                                name: "firstName",
                                label: "First name",
                                type: "text",
                                placeholder: "Enter your first name",
                            },
                            {
                                name: "lastName",
                                label: "Last name",
                                type: "text",
                                placeholder: "Enter your last name",
                            },
                            {
                                name: "dateOfBirth",
                                label: "Date of birth",
                                type: "date",
                                placeholder: "Select your date of birth",
                            },
                            {
                                name: "email",
                                label: "Email",
                                type: "email",
                                placeholder: "Enter your email address",
                            },
                            {
                                name: "phoneNumber",
                                label: "Phone number",
                                type: "tel",
                                placeholder: "Enter your phone number",
                            },
                            {
                                name: "street",
                                label: "Street",
                                type: "text",
                                placeholder: "Enter your street address",
                                colSpan: "full",
                            },
                            {
                                name: "city",
                                label: "City",
                                type: "text",
                                placeholder: "Enter your city",
                            },
                            {
                                name: "country",
                                label: "Country",
                                type: "select",
                                placeholder: "Select your country",
                                options: COUNTRY_OPTIONS,
                            },
                            {
                                name: "postCode",
                                label: "Post code",
                                type: "text",
                                placeholder: "Enter your post code",
                            },
                            {
                                name: "password",
                                label: "Password",
                                type: "password",
                                placeholder: "Create a password",
                            },
                            {
                                name: "confirmPassword",
                                label: "Confirm password",
                                type: "password",
                                placeholder: "Confirm your password",
                            },
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
