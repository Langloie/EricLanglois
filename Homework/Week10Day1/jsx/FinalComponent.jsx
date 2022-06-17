import React from "react";

const FinalComponent = () => {
  // Create the Arthur object
  const Arthur = {
    name: "Arthur Bernier",
    age: "35",
    email: "ceo@arthurbernierjr.com",
  };

  return Object.keys(Arthur).map((key) => {
    return (
      <h2 key={key}>
        {/* Arthur[name] */}
        {key}: {Arthur[key]}
      </h2>
    );
  }); // ["name", "age", "email"]; Arthur.name
};

export default FinalComponent;
