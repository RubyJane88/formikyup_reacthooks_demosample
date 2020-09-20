import React from "react";
import TextField from "@material-ui/core/TextField";
import { ErrorMessage } from "formik";

const FormikTextfield = ({ classes, id, formikProps, placeholder, label }) => {
  return (
    <section className={classes.full}>
      <TextField
        className={classes.full}
        id={id}
        value={formikProps.values[`${id}`]}  
        onChange={formikProps.handleChange}
        variant="outlined"
        onBlur={formikProps.handleBlur}
        placeholder={placeholder}
        label={label}
      />
      <div className={classes.errorColor}>
        <ErrorMessage name={id} />
      </div>
    </section>
  );
};

export default FormikTextfield;
