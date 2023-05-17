import React, { Component } from "react";
import Card from "./Cards";


class Api extends Component {
  state = {
    activeBtn: 0
  }

  handleButtonClick = (id) => {
    this.setState({ activeBtn: id })
  }
  render() {
    const data = ''
    { data.length || <p>There is no data</p> }
    return <>
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
        <Card data={data} />
      </div>
    </>
  }

}

const categories = ['popular', 'top_rated', 'now_playing', 'upcoming'];

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzFkMTZhZTc4NmMwZjU0MTAyMGYzMmNhNDg3MDBiYSIsInN1YiI6IjYxN2IyZDkxYzE0ZmVlMDA2M2Y5ZTk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ICs_jjI_I2ZNjSOdbhxddWidSH6Khct1VBD-MjEromk`;
function getMovies(id) {
  return fetch(`https://api.themoviedb.org/3/movie/top_rated`, { headers: { authorization: `Bearer ${token}` } })

    .then((response) => {
      if (!response.status === 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });

}

getMovies(1)
export default Api;
