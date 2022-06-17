import './style.css'

class SmallBox extends React.Component {
    render(){
        return(
            <div className = "smBox">
                
            </div>
            );
    }
}

class Sidebar extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>Player {this.props.playerNumber}</h2>
                <h3>Wins: </h3>
                <div>{this.props.children}</div>
            </div>
            );
    }
}

class LargeBox extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>Player {this.props.playerNumber}</h2>
                <h3>Wins: </h3>
                <div>{this.props.children}</div>
            </div>
            );
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <SmallBox />
                <Player playerNumber={"X"}/>
                <Player playerNumber={"O"}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));


//css colors dark grey rgb(221,221,221)

//darkest grey