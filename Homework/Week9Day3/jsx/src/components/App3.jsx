// 1. IMPORT REACT
import React from 'react';
// 2. ADDITIONAL IMPORTS
import MovieInfo from "./MovieInfo";
// 3. CREATE COMPONENT
class App extends React.Component {
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apikey: 'apikey=' + 'bcd700ea',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }
    handleChange = (e) =>{
        this.setState({
             [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
        },
        () => {
            fetch(this.state.searchURL)
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                console.error(error.message);
            })
        })
    }

    render() {
        return (
            <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='movieTitle'>Title</label>
          <input
            id='movieTitle'
            type='text'
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Find Movie Info'
          />
        </form>
        <MovieInfo />
      </>
        )
    }
}
// 4. EXPORT COMPONENT
export default App;