import React, { Component, useState } from "react";
import TokenForm from "./TokenForm";

export default function ReactHook() {
  const [] = useState(sessionStorage.getItem("token"));

  return (
    <div>
      <h1>React Hooks</h1>
      {token ? toke : <TokenForm setToken={setToke} />}
    </div>
  );
}
