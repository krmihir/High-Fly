import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Flightdetails = ({ detail }) => {
  return (
    <>
      <div className="container d-flex justify-content-evenly gap-4 flex-wrap mt-5">
        {detail &&
          detail.map((currentItem, index) => (
            <div
              className="card mb-4 shadow-sm"
              key={index}
              style={{ backgroundColor: "#d3d6db" }}
            >
              <div className="card-body text-center">
                <div className="row align-items-center">
                  <div className="col-12 mb-3">
                    <img
                      src={currentItem.airline_logo}
                      alt="Airline Logo"
                      className="img-fluid"
                    />
                    <p>
                      <span className="fw-bold">
                        {currentItem.flights[0].airline}
                      </span>
                    </p>
                    <p>
                      <span className="fw-bold">Flight No. </span>
                      {currentItem.flights[0].flight_number}
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <p className="fw-bold">Departure</p>
                    <p>{currentItem.flights[0].departure_airport.name}</p>
                    <p>{currentItem.flights[0].departure_airport.time}</p>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <p className="fw-bold">Arrival</p>
                    <p>{currentItem.flights[0].arrival_airport.name}</p>
                    <p>{currentItem.flights[0].arrival_airport.time}</p>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <p>
                      <span className="fw-bold">Price: </span>Rs.
                      {currentItem.price}/-
                    </p>
                    <p>
                      <span className="fw-bold">Duration: </span>
                      {currentItem.total_duration} min
                    </p>
                    <p>
                      <span className="fw-bold">Class: </span>
                      {currentItem.flights[0].travel_class}
                    </p>
                  </div>
                  <div
                    className="col-2 mb-3 btn btn-primary d-grid gap-2 mx-auto"
                    onClick={() => {
                      alert("Your tickets booked successfully");
                    }}
                  >
                    Book Now
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Flightdetails;
