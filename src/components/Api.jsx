import React, { Component } from "react";
import Card from "./Cards";
import './Header/header.css'

const categories = ["popular", "top_rated", "now_playing", "upcoming"];
const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzFkMTZhZTc4NmMwZjU0MTAyMGYzMmNhNDg3MDBiYSIsInN1YiI6IjYxN2IyZDkxYzE0ZmVlMDA2M2Y5ZTk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ICs_jjI_I2ZNjSOdbhxddWidSH6Khct1VBD-MjEromk`;

class Api extends Component {
  state = {
    activeBtn: 0,
    data: [],
    title: ''

  };


  componentDidMount() {
    const { activeBtn } = this.state;
    getMovies(activeBtn).then((data) => this.setState({ data }))

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeBtn !== this.state.activeBtn) {
      getMovies(this.state.activeBtn).then((data) => this.setState({ data })
      )
    }

  }

  handleButtonClick = (id) => {
    this.setState({ activeBtn: id });

  };
  render() {
    const { data } = this.state;
    const filterData = data.results?.filter(movie => movie.original_title.toLowerCase().includes(this.state.title.toLowerCase()))

    return (
      <>
        <>
          <div className="page-wrapper">
            <div className="nav-wrapper">
              <div className="grad-bar"></div>
              <nav className="navbar">
                <h2>MOVIESPOT</h2>
              </nav>
            </div>
          </div>
          <article className="background-image container">
            <header className="container__header background-image__hover">
              <div className="container__header__content">
                <h1>Welcome.</h1>
                <p>
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </p>
              </div>
              <input type="search" placeholder="Search" onChange={(e) => this.setState({ title: e.target.value })} />
            </header>
          </article>
        </>
        <div className="😐">
          <div className="heading">
            <h2>Trending</h2>
            <div className="today-week">
              <div
                className={this.state.activeBtn === 0 ? "active" : ""}
                onClick={() => this.handleButtonClick(0)}
              >
                Now Playing
              </div>
              <div
                className={this.state.activeBtn === 1 ? "active" : ""}
                onClick={() => this.handleButtonClick(1)}
              >
                Popular
              </div>
              <div
                className={this.state.activeBtn === 2 ? "active" : ""}
                onClick={() => this.handleButtonClick(2)}
              >
                Top Rated
              </div>
              <div
                className={this.state.activeBtn === 3 ? "active" : ""}
                onClick={() => this.handleButtonClick(3)}
              >
                Upcoming
              </div>
            </div>
          </div>
          <Card data={filterData} />
        </div>
      </>
    );
  }
}

function getMovies(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${categories[id]}`, {
    headers: { authorization: `Bearer ${token}` },
  })
    .then((response) => {
      if (!response.status === 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
      }
      return response.json();
    })

}
export default Api
