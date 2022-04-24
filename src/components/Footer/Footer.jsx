import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  const yy = new Date();
  let year = yy.getFullYear();
  return (
    <>
      <div class="main-footer">
        <div class="footer-col1">
          <ul>
            <li>YTS©2011-{year}</li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">DMCA</Link>
            </li>
            <li>
              <Link to="/">API</Link>
            </li>
            <li>
              <Link to="/">RSS</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Browse Movie</Link>
            </li>
            <li>
              <Link to="/">Requests</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
        <div class="footer-col2">
          <ul>
            <li>
              <Link to="/">EZTV</Link>
            </li>
            <li>
              <Link to="/">YIFY Status</Link>
            </li>
            <li>
              <Link to="/">YTS Proxies</Link>
            </li>
            <li>
              <Link to="/">YTS Proxies(TOR)</Link>
            </li>
          </ul>
        </div>
        <div class="footer-col3">
          <ul>
            <li>
              <p>
                By using this site you agree to and accept our{" "}
                <Link to="/">User Agreement</Link>, which can be read{" "}
                <Link to="/">here</Link>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
