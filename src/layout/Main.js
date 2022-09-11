import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    total: "",
    loading: true,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=8b565b28&s=classic")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=8b565b28&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          total: data.totalResults,
          loading: false,
        })
      );
  };

  render() {
    return (
      <div className="container content">
        <Search
          searchMovie={this.searchMovies}
          searchTotal={this.state.total}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
