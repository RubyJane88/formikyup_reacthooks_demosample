import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export const allData = new Array(25).fill(0).map((_val, i) => i + 1);

const perPage = 10;
const types = {
  START: "START",
  LOADED: "LOADED",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "LOADED":
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

const MyContext = React.createContext({} as any);

function MyProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  const load = () => {
    dispatch({ type: types.START });

    setTimeout(() => {
      const newData = allData.slice(after, after + perPage);
      // @ts-ignore
      dispatch({ type: types.LOADED, newData });
    }, 1000);
  };

  return (
    <MyContext.Provider value={{ loading, data, more, load }}>
      {children}
    </MyContext.Provider>
  );
}

function MyFirstComponent() {
  const { data, loading, more } = React.useContext(MyContext);

  return (
    <div className="App">
      <ul>
        {data.map((row) => (
          <li key={row} style={{ background: "orange" }}>
            {row}
          </li>
        ))}

        {loading && <li>Loading...</li>}

        {!loading && more && <MySecondComponent />}
      </ul>
    </div>
  );
}

function MySecondComponent() {
  const { load } = React.useContext(MyContext);

  return (
    <li style={{ background: "green" }}>
      <button onClick={load}>Load More</button>
    </li>
  );
}

export default () => {
  return (
    <MyProvider>
      <MyFirstComponent />
      <MySecondComponent />
    </MyProvider>
  );
};

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
