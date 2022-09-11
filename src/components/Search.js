import React from "react";
export default class Search extends React.Component {
  state = {
    search: "",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search);
    }
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col s12">
            <div className="input-field ">
              <input
                placeholder="Search"
                type="search"
                onChange={(e) => this.setState({ search: e.target.value })}
                value={this.state.search}
                className="validate"
                onKeyDown={this.handleKey}
              />
              <button className="btn search-btn" onClick={() => this.props.searchMovie(this.state.search)}>
                Search Movies
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
