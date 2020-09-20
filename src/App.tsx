import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import UseContext from "./components/react_sampledemos/use-context-provider-demo";
export default function ReactHook() {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div className={classes.rootInput}>
      <UseContext />
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
