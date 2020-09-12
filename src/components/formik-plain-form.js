import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorMessage, Form, Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormikValuesViewer from "./formik-values-viewer";

const FormikPlainForm = ({
  initialValues,
  validationSchema,
  textFieldOne,
  textFieldTwo,
  textFieldThree,
  textButton,
  placeholderOne,
  placeholderTwo,
  placeholderThree,
  labelOne,
  labelTwo,
  labelThree,
}) => {
  const classes = useStyles();

  /*formik - for data binding inputs.
         Requirements: initialValues, validationSchema, onSubmit, pass an anonymous function with formikProps as a child props
         Inside parent Div - you can pass children elements
         */
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        alert(`values : ${JSON.stringify(values, null, 2)}`);
        // await axios.post(url, values)
      }}
    >
      {(formikProps) => (
        <Form className={`${classes.rootInput}`}>
          <section className={classes.full}>
            <TextField
              className={classes.full}
              id={textFieldOne}
              value={formikProps.values[`${textFieldOne}`]}
              onChange={formikProps.handleChange}
              variant="outlined"
              onBlur={formikProps.handleBlur}
              placeholder={placeholderOne}
              label={labelOne}
            />
            <div style={{ color: "red" }}>
              <ErrorMessage name={textFieldOne} />
            </div>
          </section>

          {/*onChange - an event to capture keyboard strokes. This is for the data binding */}

          <section className={classes.full}>
            <TextField
              className={classes.full}
              id={textFieldTwo}
              value={formikProps.values[`${textFieldTwo}`]}
              onChange={formikProps.handleChange}
              variant="outlined"
              onBlur={formikProps.handleBlur}
              placeholder={placeholderTwo}
              label={labelTwo}
            />
            <div style={{ color: "red" }}>
              <ErrorMessage name={textFieldTwo} />
            </div>
          </section>

          <section className={classes.full}>
            <TextField
              className={classes.full}
              id={textFieldThree}
              value={formikProps.values[`${textFieldThree}`]}
              onChange={formikProps.handleChange}
              variant="outlined"
              onBlur={formikProps.handleBlur}
              placeholder={placeholderThree}
              label={labelThree}
            />
            <div style={{ color: "red" }}>
              <ErrorMessage name={textFieldThree} />
            </div>
          </section>

          <section className={classes.full}>
            <Button
              size={"large"}
              className={classes.full}
              type="submit"
              variant="contained"
              color="primary"
            >
              {textButton}
            </Button>
          </section>

          <FormikValuesViewer formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default FormikPlainForm;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  full: {
    width: "100%",
  },
  rootInput: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
