import './App.css';

import React from 'react';

class App extends React.Component {
    render(){
        return(
            <div><h1>Component</h1></div>
            
        )
    }
}

ReactDOM.render(<App/>,document.querySelector(".container"));
