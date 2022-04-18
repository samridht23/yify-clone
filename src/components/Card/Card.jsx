import React from "react";
import "./style.scss";

const Card = (props) => {
  return (
    <div>
      <div className="main-card">
        <div className="card">
          <div className="card-img">
            <img src={props.medium_cover_image} alt="movie-poster" />
          </div>
          <div className="card-title">
            <a href="#">{props.title}</a>
          </div>{" "}
          {/*use react router Link to route link*/}
          <div className="card-desc">{props.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
