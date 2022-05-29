import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../Card/Card";
import axios from "axios";
import Loading from "../Loading/Loading";

const baseURL = "https://yts.mx/api/v2/list_movies.json";

const Body = () => {
  const [moviedata, setMoviedata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setMoviedata(res.data.data.movies);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const MovieFetch = (
    <div className="main_body">
      <div className="movie_grid">
        {moviedata.map((moviedata, index) => (
          <Card
            key={index}
            medium_cover_image={moviedata.medium_cover_image}
            title={moviedata.title}
            year={moviedata.year}
            movie_id={moviedata.id}
          />
        ))}
      </div>
    </div>
  );
  return <div className="main_app">{isLoading ? <Loading /> : MovieFetch}</div>;
};

export default Body;
