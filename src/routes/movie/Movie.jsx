import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.scss";

const movie_info_url = "https://yts.mx/api/v2/movie_details.json";

const Movie = () => {
  const params = useParams();
  const [moviedata, setMoviedata] = useState([]);
  const main_movie_info_url = movie_info_url + "?movie_id=" + params.movie_id;

  const fetchData = () => {
    axios
      .get(main_movie_info_url)
      .then((res) => {
        setMoviedata(res.data.data.movie);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div class="main">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="main_body">
          <div class="movie_info_top">
            <div class="movie_poster">
              <img src={moviedata.medium_cover_image} alt="movie_poster" />
            </div>
            <div class="movie_info">
              <h2>{moviedata.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
