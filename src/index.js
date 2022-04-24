import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "../src/routes/MoviePage/MoviePage";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/MoviePage" element={<MoviePage />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
