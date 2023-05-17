import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cards">
      {data.map((e) => {
        return (
          <div className="😎">
            <div className="percentage">
              70<sup>%</sup>
            </div>
            <div>
              <img
                className="poster"
                alt=""
                src="https://i.pinimg.com/736x/89/32/f5/8932f506b1eae4262761b60e4fc7a0a3.jpg"
              />
            </div>
            <div className="content">
              <div className="title">{data}</div>
              <p>12-10-2025</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

class Images extends Component {
  state = {
    data: null,
  };
  setData = (newData) => {
    this.setState({ data: newData });
  };
  componentDidMount() {
    const { type, query } = this.props;
    imageSearch(query, type).then((res) => {
      this.setData(res.hits);
    });
  }
  componentDidUpdate(prevProps) {
    const { type, query } = this.props;
    if (prevProps.type !== type && prevProps.query !== query) {
      imageSearch(query, type).then((res) => {
        this.setData(res);
      });
    }
  }
  render() {
    console.log(this.state.data);
    const { data } = this.state;
    if (!data) return <Loading />;
    const cards = data.map((card) => <Card data={card} key={card.id} />);
    return <div className="gallery">{cards}</div>;
  }
}
