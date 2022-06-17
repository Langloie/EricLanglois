import React from "react";

const Component = () => {
  // Create an array of object
  const dogs = [
    {
      name: "Sparky",
      age: 5,
    },
    {
      name: "Spot",
      age: 15,
    },
    {
      name: "Ralph",
      age: 49,
    },
    {
      name: "Fidos",
      age: 55,
    },
  ];

  // Create a list of dogs
  const dogList = dogs.map((dog) => {
    return (
      <div key={dog.name}>
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
      </div>
    );
  });

  /*
  const dogList = [
      <div>
        <h1>Sparky</h1>
        <h2>5</h2>
    </div>,
      <div>
        <h1>Spot</h1>
        <h2>15</h2>
    </div>,
      <div>
        <h1>Ralph</h1>
        <h2>55</h2>
    </div>,
      <div>
        <h1>Fido</h1>
        <h2>49</h2>
    </div>,
  ]
*/

  return <div>{dogList}</div>;
};

export default Component;
