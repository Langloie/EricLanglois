//import react
import React, {useState, useEffect} from 'react';

//additional imports

//create component
const Counter = () =>{
    //lets declare a new state inside of our component
    const [counter, setCounter] = useState(0);

    //second piece of state
    const [evenCounter, setEvenCounter] = useState(0);

    //create an effect to render our component when evenCounter changes
    useEffect(()=>{
        
    }, [evenCounter])

    //create a function to add one to counter
    const handleAddOne = () =>{
        if(counter % 2 === 0){
            setEvenCounter(evenCounter +1);
        }
        //if counter is not even update counter
        setCounter(counter + 1);
    };
    return(
        <div>
            <h1>Counter {counter}</h1>
            <h1>Even Counter {evenCounter}</h1>
            <button onClick={handleAddOne}>Click to Add One</button>
        </div>
    );
};

//useEffect
//1 by passing nothing as a second parameter of useEffect

// useEffect(()=>{
//     do something here
// })

//2 by passing an empty array as a second parameter

// useEffect(()=>{
//     do something here
// },[])

//3 by passing an array with data inside

// useEffect(()=>{
//     do something here
// }, [data])

//export component
export default Counter;