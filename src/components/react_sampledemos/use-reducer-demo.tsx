// @ts-ignore
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const allData = new Array(25).fill(0).map((_val, i) => i + 1);
const perPage = 5;

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true };
    case "loaded":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("Don't understand the action");
  }
};

function UseReducerDemo() {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });

  const { loading, data, after, more } = state;
  const classes = useStyles();

  return (
    <div className={classes.rootInput}>
      <ul>
        {data.map((row) => (
          <li key={row} style={{ background: "pink" }}>
            {row}
          </li>
        ))}

        {loading && <li>Loading...</li>}

        {!loading && more && (
          <li style={{ background: "gray" }}>
            <button
              onClick={() => {
                dispatch({ type: "start" });

                /* dispatch another event when the data has bee loaded*/
                setTimeout(() => {
                  const newData = allData.slice(after, after + perPage);
                  dispatch({ type: "loaded", newData });
                }, 1000);
              }}
            >
              Load More
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UseReducerDemo;

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
      margin: theme.spacing(5),
      height: "30rem",
      width: "30rem",
    },
  },
}));
