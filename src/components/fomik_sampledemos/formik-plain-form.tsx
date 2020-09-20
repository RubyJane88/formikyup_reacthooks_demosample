import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorMessage, Form, Formik } from "formik";
import Button from "@material-ui/core/Button";
import FormikValuesViewer from "../shared/formik-values-viewer";
import FormikTextfield from "./formik-textfield";

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
          <FormikTextfield
            classes={classes}
            id={textFieldOne}
            placeholder={placeholderOne}
            formikProps={formikProps}
            label={labelOne}
          />

          {/*onChange - an event to capture keyboard strokes. This is for the data binding */}

          <FormikTextfield
            classes={classes}
            id={textFieldTwo}
            placeholder={placeholderTwo}
            formikProps={formikProps}
            label={labelTwo}
          />

          <FormikTextfield
            classes={classes}
            id={textFieldThree}
            placeholder={placeholderThree}
            formikProps={formikProps}
            label={labelThree}
          />

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

  errorColor: {
    color: "red",
  },
}));
