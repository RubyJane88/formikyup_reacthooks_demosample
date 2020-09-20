import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import FormikPlainForm from "./components/fomik_sampledemos/formik-plain-form";
import * as yup from "yup";
import CssBaseline from "@material-ui/core/CssBaseline";
import initialOfPersonObject from "./forms-schema/formikplain";
import UseReducerDemo from "./components/react_sampledemos/use-reducer-demo";

export default function ReactHook() {
  /*
  name = "dev"; - in Angular 
    to render: 
  <h2> {{name}} </h2>

   data:() => ({
      name: "dev"
  })  - in Vue
  to render: 
  <h2> {{name}} </h2>

react class:  
  state = {
    name : "dev"
  }
  */
  const classes = useStyles();

  //to update the values of the local state Person object
  useEffect(() => {}, []);
  // [] - to stop infinite look

  return (
    <div>
      <UseReducerDemo />

      {/*<div className={classes.root}>*/}
      {/*  <AppBar position="static">*/}
      {/*    <Toolbar>*/}
      {/*      <IconButton*/}
      {/*        edge="start"*/}
      {/*        className={classes.menuButton}*/}
      {/*        color="inherit"*/}
      {/*        aria-label="menu"*/}
      {/*      >*/}
      {/*        <MenuIcon />*/}
      {/*      </IconButton>*/}
      {/*      <Typography variant="h6" className={classes.title}>*/}
      {/*        News*/}
      {/*      </Typography>*/}
      {/*      <Button color="inherit">Login</Button>*/}
      {/*    </Toolbar>*/}
      {/*  </AppBar>*/}
      {/*</div>*/}

      {/*<CssBaseline>*/}
      {/*  <Container>*/}
      {/*    <h1>Formik Yup</h1>*/}

      {/*    <FormikPlainForm*/}
      {/*      initialValues={initialOfPersonObject}*/}
      {/*      textButton={"zend"}*/}
      {/*      textFieldOne={"firstName"}*/}
      {/*      textFieldTwo={"lastName"}*/}
      {/*      textFieldThree={"email"}*/}
      {/*      placeholderOne={"🍇"}*/}
      {/*      placeholderTwo={"🍊"}*/}
      {/*      placeholderThree={"🥒"}*/}
      {/*      labelOne={"First Name"}*/}
      {/*      labelTwo={"Last Name"}*/}
      {/*      labelThree={"Email"}*/}
      {/*      validationSchema={schema}*/}
      {/*    />*/}
      {/*  </Container>*/}
      {/*</CssBaseline>*/}
    </div>
  );
}

const schema = yup.object({
  firstName: yup.string().label("First Name").required(),
  lastName: yup.string().label("Last Name").required(),
  email: yup.string().label("Email").required().email(),
});

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

  rootInput: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
