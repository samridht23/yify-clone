import React from "react";
import "./style.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";

const baseUrl = "https://api.themoviedb.org/3/";

const MoviePage = () => {
  const [moviedata, setMovieData] = React.useState([]);
  return (
    <>
      <Navbar />
    </>
  );
};

export default MoviePage;
