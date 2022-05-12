import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./routes/movie/Movie";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/movie" element={<Movie />}>
        <Route path=":movie_id" element={<Movie />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
