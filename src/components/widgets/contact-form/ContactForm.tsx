"use client";

import React, { useState } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/resources/constants";
import styles from "./ContactForm.module.scss";

interface ContactFormValues {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message: string; // ✅ FIX
}

const ContactForm: React.FC = () => {
    const { showAlert } = useAlert();
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: ContactFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
    ) => {
        try {
            await sendContactRequest(values);
            resetForm();
            setSuccessMsg("✅ Message sent successfully!");
            showAlert("Success", "Your message has been sent!", "success");
        } catch {
            showAlert("Error", "Something went wrong. Try again.", "error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Contact & Inquiries</h2>
                    <p>
                        Reach out to our team for product questions, partnerships, or tailored solutions.
                        We typically respond within one business day.
                    </p>
                </motion.div>

                <div className={styles.layout}>

                    <motion.aside
                        className={styles.context}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Company information</h3>

                        <p className={styles.contextText}>
                            Our team works with clients worldwide, providing professional guidance
                            and long-term support.
                        </p>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <FaMapMarkerAlt />
                                <span>{COMPANY_ADDRESS}</span>
                            </div>

                            <div className={styles.metaItem}>
                                <FaEnvelope />
                                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                            </div>

                            <div className={styles.metaItem}>
                                <FaPhoneAlt />
                                <a href={`tel:${COMPANY_PHONE}`}>{COMPANY_PHONE}</a>
                            </div>
                        </div>
                    </motion.aside>

                    <motion.div
                        className={styles.formPanel}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {successMsg ? (
                            <div className={styles.successMsg}>{successMsg}</div>
                        ) : (
                            <Formik<ContactFormValues>
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className={styles.form}>
                                        <div className={styles.row}>
                                            <Field name="name" placeholder="First name" />
                                            <Field name="secondName" placeholder="Last name" />
                                        </div>

                                        <Field name="email" type="email" placeholder="Business email" />
                                        <Field name="phone" type="tel" placeholder="Phone number" />
                                        <Field as="textarea" name="message" rows={5} placeholder="Describe your request" />

                                        <ButtonUI
                                            type="submit"
                                            fullWidth
                                            loading={isSubmitting}
                                            text="Submit request"
                                            color="text"
                                            textColor="backgroundLight"
                                        />
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
