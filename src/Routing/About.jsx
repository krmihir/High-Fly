import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import chartered from "./../Images/chartered.png";
import helicopter from "./../Images/helicopter.webp";
import flights from "./../Images/flights.webp";
import airline_logos from "./../Images/airline_logos.gif";

const About = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "550px" }}>
            <img src={chartered} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Jet Rental Service</h3>
              <p>
                We provide various type of luxury private jet rental services at
                affordable prices.
              </p>
              <button type="button" className="btn btn-primary">
                View more
              </button>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "550px" }}>
            <img src={helicopter} className="d-block w-100 h-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Helicopter Rental Service</h3>
              <p>
                We provide various type of helicopter rental services at
                affordable prices.
              </p>
              <button type="button" className="btn btn-primary">
                View more
              </button>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "550px" }}>
            <img src={flights} className="d-block w-100 h-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              // style={{ color: "black" }}
            >
              <h3>Various Airline Support</h3>
              <p>
                Provides various airline options for our users with the lowest
                cost.
              </p>
              <button type="button" className="btn btn-primary">
                View more
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* </div> */}

      <div className="container mt-5 text-center" style={{ color: "#03045e" }}>
        <h1>Fly High with Low Cost!!!</h1>
        <h4>
          <u>
            <em>
              Our goal is to provide everyone high quality air travel with
              lowest cost.
            </em>
          </u>
        </h4>
      </div>

      <div className="container text-center mt-5 mb-5">
        <h3>All airline tickets available on our platform with ease.</h3>
        <div>
          <img src={airline_logos} class="img-fluid rounded" alt="..." />
        </div>
      </div>
    </>
  );
};

export default About;
