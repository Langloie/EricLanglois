// const message = 'Hello World';

// document.addEventListener("DOMContentLoaded", ()=>{
//     const div = document.querySelector(".container");
//     div.innerHTML = "<h1>" + message + "</h1>";
// });

// const firstName = "Eric"

// ReactDOM.render(
//     <h1>Hello, {firstName}</h1>,
//     document.querySelector(".container")
// );
import '../main.css';

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>React Tic Tac Toe</h1>
            </div>
            );
    }
}

class Player extends React.Component {
    render () {
      return (
        <div className={this.props.whichPlayer}>
          <h2>Player {this.props.whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
    }
  }

  class Square extends React.Component {
    render () {
      return (
        <div>
          <h4>square</h4>
        </div>
      )
    }
  }

  class Board extends React.Component {
    render () {
      return (
        <div className='board'>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      )
    }
  }

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Player playerNumber={"X"}/>
                <Player playerNumber={"O"}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));