"use client";

import React from "react";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";
import styles from "./FormUI.module.scss";
import InputUI from "@/components/ui/input/InputUI";
import ButtonUI from "@/components/ui/button/ButtonUI";

interface FieldOption {
    label: string;
    value: string;
}

interface FieldConfig {
    name: string;
    type: string;
    placeholder?: string;
    options?: FieldOption[];
    colSpan?: "full";
}

interface FormUIProps {
    title: string;
    description?: string;
    isSubmitting?: boolean;
    fields?: FieldConfig[];
    submitLabel?: string;
    showTerms?: boolean;
}

const defaultFields: FieldConfig[] = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
];

const FormUI: React.FC<FormUIProps> = ({
                                           title,
                                           description,
                                           isSubmitting,
                                           fields = defaultFields,
                                           submitLabel = "Sign In",
                                           showTerms = false,
                                       }) => {
    const { values } = useFormikContext<any>();

    const isButtonDisabled =
        isSubmitting || (showTerms ? !values.terms : false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>{title}</h2>
                {description && <p className={styles.description}>{description}</p>}

                <Form className={styles.formContent}>
                    <div className={styles.fieldsGrid}>
                        {fields.map((field) => {
                            const fieldClassName =
                                field.colSpan === "full"
                                    ? `${styles.fieldItem} ${styles.fullWidth}`
                                    : styles.fieldItem;

                            if (field.type === "select") {
                                return (
                                    <div key={field.name} className={fieldClassName}>
                                        <div className={styles.selectWrapper}>
                                            <Field
                                                as="select"
                                                name={field.name}
                                                className={styles.selectField}
                                            >
                                                <option value="">
                                                    {field.placeholder || "Select option"}
                                                </option>
                                                {field.options?.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </Field>
                                        </div>

                                        <ErrorMessage
                                            name={field.name}
                                            component="div"
                                            className={styles.errorText}
                                        />
                                    </div>
                                );
                            }

                            return (
                                <div key={field.name} className={fieldClassName}>
                                    <InputUI {...field} formik />
                                </div>
                            );
                        })}
                    </div>

                    {showTerms && (
                        <div className={styles.termsBlock}>
                            <label className={styles.termsLabel}>
                                <Field type="checkbox" name="terms" />
                                <span>
                                    I agree to the{" "}
                                    <a
                                        href="/terms-and-conditions"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Terms & Conditions
                                    </a>
                                </span>
                            </label>

                            <ErrorMessage
                                name="terms"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>
                    )}

                    <ButtonUI
                        type="submit"
                        text={submitLabel}
                        disabled={isButtonDisabled}
                        loading={isSubmitting}
                        fullWidth
                    />
                </Form>
            </div>
        </div>
    );
};

export default FormUI;