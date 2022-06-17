import React from "react";

const Child = (props) => {
  console.log(props.greeting);
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};

export default Child;
