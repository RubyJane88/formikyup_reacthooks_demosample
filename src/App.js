import React, { Component, useState } from "react";
import TokenForm from "./TokenForm";

export default function ReactHook() {
  const [] = useState(sessionStorage.getItem("token"));

  return (
    <div>
      <h1>React Hooks Explained</h1>
      {token ? token : <TokenForm setToken={setToke} />}
    </div>
  );
}
