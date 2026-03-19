import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import { useField } from "formik";

type FormikInputProps = InputProps & { name: string; formik?: boolean };

const errorStyle: React.CSSProperties = {
    color: "#dc2626",
    fontSize: "0.85rem",
    marginTop: 6,
};

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        return (
            <>
                <Input {...field} {...props} error={!!meta.error && meta.touched} />
                {meta.touched && meta.error && (
                    <div style={errorStyle}>{meta.error}</div>
                )}
            </>
        );
    }
    return <Input {...props} />;
};

export default InputUI;
