
import React from "react";

class Card extends React.Component {
  render() {

    const { data } = this.props;
    if (!data) {
      return <div>loading</div>
    }

    return (
      <div className="cards">
      
        {data?.map((film) => (
          
          <div className = "card" key = { film.id } >
            <div className="percentage">
              {film.vote_average}<span>%</span>
            </div>
            <div>
              <img
                className="poster"
                alt=""
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.backdrop_path}`}
              />
            </div>
            <div className="content">
              <div className="title">{film.original_title}</div>
              <p>12-10-2025</p>
            </div>
          </div>
        ))} 
      </div>
    );
  }
}

export default Card;
