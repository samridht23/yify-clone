import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="main-card">
        <div className="card">
          <div className="movie-img">
            <Link to={`/movie/${props.movie_id}`}>
              <img src={props.medium_cover_image} alt="movie-poster" />
            </Link>
          </div>
          <div className="movie-title">
            <Link to={`movie/${props.movie_id}`}>{props.title}</Link>
          </div>{" "}
          <div className="movie-year">{props.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
