import React from "react";
import Card from "./Cards";

const Api = () => {
  const [activeButton, setActiveButton] = React.useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const data = "";
  return (
    <>
      <div className="😐">
        <div className="heading">
          <h2>Trending</h2>
          <div className="today-week">
            <div
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              Now Playing
            </div>
            <div
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Popular
            </div>
            <div
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Top Rated
            </div>
            <div
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              Upcoming
            </div>
          </div>
        </div>
        <Card data={data} />
      </div>
    </>
  );
};

export default Api;
