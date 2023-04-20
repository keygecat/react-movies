import React from "react";
import {Movies} from '../componets/Movies';
import {Search} from '../componets/search';
import {Preloader} from "../componets/preloader";


class Main extends React.Component {
    state = {
            movies: [],
            loading: true,
        };
    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=36ce8d47&s=Scream")
        .then((response) => response.json())
        .then((data) => this.setState({movies: data.Search, loading: false}));
    }

    searchMovies = (str, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=36ce8d47&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
        .then((response) => response.json())
        .then((data) => this.setState({movies: data.Search, loading: false}));
    }

    render() {
        const {movies, loading} = this.state;

        return (
        <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
        </main>
        );
    }
}

export {Main};