import React from "react";
import "./../styles/App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const nameChangeHandler = (e) => {
    const nameValue = "Hello " + e.target.value + "!";
    setName(nameValue);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <label htmlFor="name">Enter your name:</label>
      <br />
      <input onChange={nameChangeHandler} id="name" type="text" />
      <div>{name}</div>
    </div>
  );
};

export default App;
