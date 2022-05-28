import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  const movieDuration = (runtime) => {
    var num = runtime;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return " " + rhours + "h " + rminutes + "min";
  };
  const yt_code = moviedata.yt_trailer_code;
  const yt_url = `https://www.youtube.com/embed/${yt_code}`;
  const [quality, setQuality] = useState(0);
  const [size, setSize] = useState(0);
  const [peer, setPeer] = useState(0);
  const [seed, setSeed] = useState(0);

  return (
    <div>
      <div class="main">
        <div class="movie_navbar">
          <Navbar />
        </div>
        <div class="main_body">
          <div
            class="movie_info_top"
            style={{
              backgroundImage: `url(${moviedata.background_image})`,
            }}
          >
            <div class="movie_info">
              <div class="movie_info_poster">
                <img src={moviedata.large_cover_image} alt="" />
              </div>
              <div class="movie_info_title">
                <h2>{moviedata.title}</h2>
                <h3>
                  {moviedata.year} | {moviedata.language} |
                  {movieDuration(moviedata.runtime)}
                </h3>
              </div>
              <div class="movie_rating">
                <a href={imdb_main_url + moviedata.imdb_code}>
                  <img src={ImdbLogo} alt="imdb_logo" />
                </a>
                <div class="imdb_rating">
                  <h4>{moviedata.rating}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="movie_downlaod">
            <div class="movie_download_link">
              {moviedata.torrents?.map((elements) => (
                <TorLink
                  tor_url={elements.url}
                  tor_quality={elements.quality}
                  tor_type={elements.type}
                />
              ))}
            </div>
          </div>
          <div class="movie_overview">
            <div class="movie_overview_info">
              <h2>Overview:</h2>
              <div class="movie_description_info">
                <h3>{moviedata.description_full}</h3>
                <div class="description_container">
                  <div class="description_sub_container">
                    <h4>
                      Release Year : <h5>{moviedata.year}</h5>
                    </h4>
                  </div>
                  <div class="description_sub_container">
                    <h4>
                      Imdb Rating : <h5>{moviedata.rating}</h5>
                    </h4>
                  </div>
                  <div class="description_sub_container">
                    <h4>
                      Duration : <h5>{movieDuration(moviedata.runtime)}</h5>
                    </h4>
                  </div>
                  <div class="description_sub_container">
                    <h4>
                      Language : <h5>{moviedata.language}</h5>
                    </h4>
                  </div>
                  <div class="description_sub_container">
                    <h4>Genres : </h4>
                    <h5>
                      {moviedata.genres?.map((element) => element + " , ")}
                    </h5>
                  </div>
                  <div class="description_sub_container">
                    <h4>
                      Downloads : <h5>{moviedata.download_count}</h5>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movie_screenshot_images">
            <div class="youtube_trailer">
              <iframe
                src={yt_url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="movie_images">
                <img src={moviedata.large_screenshot_image1} alt="" />
                <img src={moviedata.large_screenshot_image2} alt="" />
              </div>
            </div>
          </div>
          <div class="cast">
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
        <div class="movie_footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Movie;
