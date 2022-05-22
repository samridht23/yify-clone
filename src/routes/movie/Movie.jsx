import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ImdbLogo from "../../assets/images/logo-imdb.svg";
import TorLink from "../../components/TorLink/TorLink";
import Cast from "../../components/Cast/Cast";
import "./style.scss";

const movie_info_url = "https://yts.mx/api/v2/movie_details.json";
const imdb_main_url = "https://www.imdb.com/title/";

const Movie = () => {
  const params = useParams();
  const [moviedata, setMoviedata] = useState([]);
  /*const [imdbdata, setimdbdata] = useState([]);*/
  const main_movie_info_url =
    movie_info_url +
    "?movie_id=" +
    params.movie_id +
    "&with_images=true&with_cast=true";

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
  /*implement env in API key
  const options = {
    method: "GET",
    url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
    params: { id: moviedata.imdb_code },
    headers: {
      "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
      "X-RapidAPI-Key": "7717e0a94bmshc4cee5d75277c24p1f8ccbjsn651afe175a20",
    },
  };
  const imdbFetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        setimdbdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    imdbFetchData();
  }, []);
  */
  return (
    <>
      <div class="main">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="main_body">
          <div class="movie_info_top">
            <div
              class="background_image"
              style={{ backgroundImage: `url(${moviedata.background_image})` }}
            ></div>
            <div class="movie_poster">
              <img src={moviedata.large_cover_image} alt="movie_poster" />
            </div>
            <div class="movie_info">
              <h1>{moviedata.title}</h1>
              <h2>{moviedata.year}</h2>
              <h2>{moviedata.genres?.map((element) => element + " / ")}</h2>
              <div class="like_row">
                <span class="material-symbols-outlined">favorite</span>
                <div id="like_count">
                  <h4>{moviedata.like_count}</h4>
                </div>
              </div>
              <div class="rating_row">
                <a href={imdb_main_url + moviedata.imdb_code}>
                  <img src={ImdbLogo} alt="imdb_logo" />
                </a>
                <div class="imdb_rating">
                  <h4>{moviedata.rating}</h4>
                </div>
              </div>
              <div class="tor_link">
                {moviedata.torrents?.map((elements) => (
                  <TorLink
                    tor_url={elements.url}
                    tor_quality={elements.quality}
                    tor_type={elements.type}
                  />
                ))}
              </div>
              <span className="web_info">
                <b>WEB</b>: same quality as BluRay, but ripped earlier from a
                streaming service
              </span>
            </div>
          </div>
          <div class="movie_sub_info">
            <div class="plot_summary">
              <h2>Plot Summary</h2>
              {console.log(moviedata.description_intro)}
              <p>{moviedata.description_intro}</p>
            </div>
            <div class="crew">
              <div class="top_cast">
                <h2>Top Cast</h2>
                {moviedata.cast?.map((elements) => (
                  <Cast
                    cast_name={elements.name}
                    cast_character_name={elements.character_name}
                    cast_image={elements.url_small_image}
                    cast_imdb_code={elements.imdb_code}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Movie;
