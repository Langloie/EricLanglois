// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import Child from "./Child";
import Component from "./Component";
import FinalComponent from "./FinalComponent";

// 3. CREATE FUNCTIONAL COMPONENT
const App = () => {
  // Lets create a variable
  let variable;

  // Lets create a function
  const setVariable = (data) => {
    variable = data;
  };
  return (
    <div>
      {/* <Child greeting={"Hello World"} number={767} setVariable={setVariable} />
      <Component /> */}
      <FinalComponent />
    </div>
  );
};

// 4. EXPORT COMPONENT
export default App;
