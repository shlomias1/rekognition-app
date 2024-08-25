import { Link, useLocation } from "react-router-dom";
import React from "react";
import "../pages/Home.css";
import logo from "../img/logo.png";

const Appbar = () => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="dv-center">
          <Link to="/">
            <img
              className="logo-design"
              src={logo}
              alt="befit-logo"
              width="80px"
              height="80px"
            />
          </Link>

          <nav className="top-nav">
            <Link
              className={`btn ${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
            {/* <Link
              className={`btn ${
                location.pathname === "/places" ? "active" : ""
              }`}
              to="/places"
            >
              Our Places
            </Link> */}
            <Link
              className={`btn ${
                location.pathname === "/customers" ? "active" : ""
              }`}
              to="/customers"
            >
              Customers
            </Link>
            <Link
              className={`btn ${
                location.pathname === "/visitors" ? "active" : ""
              }`}
              to="/visitors"
            >
              Visitors
            </Link>
            <Link
              className={`btn ${
                location.pathname === "/rekognition" ? "active" : ""
              }`}
              to="/rekognition"
            >
              Rekognition
            </Link>
            <Link
              className={`btn ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About Us
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Appbar;
