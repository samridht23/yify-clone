import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../Card/Card";
import axios from "axios";

const baseURL = "https://yts.mx/api/v2/list_movies.json";

const Body = () => {
  const [moviedata, setMoviedata] = useState([]);

  const fetchData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setMoviedata(res.data.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="main-body">
        <div className="movie-grid">
          {moviedata.map((moviedata) => (
            <Card
              medium_cover_image={moviedata.medium_cover_image}
              title={moviedata.title}
              year={moviedata.year}
              movie_id={moviedata.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
