
class App extends React.Component {
    render(){
        tardis = {
            name: 'Time and Relative Dimension in Space',
            caps: false,
          }


        changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
            tardis: {
                name: text.toLowerCase(),
                caps: false
            }
            })
        } else {
            this.setState({
            tardis: {
                name: text.toUpperCase(),
                caps: true
            }
            })
        }
        }

        return(
            <div onClick = {this.changeIt}>
                <h1> {this.state.tardis.name} </h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));