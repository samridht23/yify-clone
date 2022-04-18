import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img
                src="https://yts.mx/assets/images/website/logo-YTS.svg"
                alt="yts-logo"
              />
            </Link>
          </div>
          <div className="togglebutton">
            <button>
              <MenuIcon />
            </button>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">4K</Link>
            </li>
            <li>
              <Link to="/">Trending</Link>
            </li>
            <li>
              <Link to="/">Browse Movie</Link>
            </li>
            <li>
              <Link className="auth" to="/">
                Login
              </Link>
            </li>
            <li>
              <Link className="auth" to="/">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
