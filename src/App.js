import React, { useState, useEffect } from "react";
import TokenForm from "./TokenForm";

export default function ReactHook() {
  const [] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    sessionStorage.setItem("token", token);
  });

  return (
    <div>
      <h1>React Hooks Explained</h1>
      {token ? token : <TokenForm setToken={setToke} />}
    </div>
  );
}
