import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import high_fly from "./../Images/high_fly.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#A2D2FF" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 ps-4" to="/home">
            <img
              src={high_fly}
              alt="Logo"
              width="35vw"
              height="35vh"
              className="d-inline-block align-text-top"
            />
            High-FLY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold fs-4"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold fs-4" to="/offers">
                  Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold fs-4" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold fs-4" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex pe-4" role="search">
              {/* <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/" role="button">
                Signup
              </Link> */}
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Logout
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
