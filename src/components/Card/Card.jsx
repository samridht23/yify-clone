import React from "react";
import "./style.scss";

const Card = (props) => {
  return (
    <div>
      <div className="main-card">
        <div className="card">
          <div className="movie-img">
            <img src={props.medium_cover_image} alt="movie-poster" />
          </div>
          <div className="movie-title">
            <a href="#">{props.title}</a>
          </div>{" "}
          {/*use react router Link to route link*/}
          <div className="movie-year">{props.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
