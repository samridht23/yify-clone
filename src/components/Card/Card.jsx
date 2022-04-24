import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="main-card">
        <div className="card">
          <div className="movie-img">
            <Link to="/MoviePage">
              <img src={props.medium_cover_image} alt="movie-poster" />
            </Link>
          </div>
          <div className="movie-title">
            <Link to="/MoviePage">{props.title}</Link>
          </div>{" "}
          {/*use react router Link to route link*/}
          <div className="movie-year">{props.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
