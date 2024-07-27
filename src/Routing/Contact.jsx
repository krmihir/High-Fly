import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Contact = () => {
  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                className="card mt-5"
                style={{ borderRadius: "15px", backgroundColor: "#E9EDC9" }}
              >
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Contact Us
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        name="name"
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="name">
                        Your Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="email"
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="phone"
                        type="text"
                        id="number"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="number">
                        Mobile No.
                      </label>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter source"
                          aria-label="Source"
                        />
                        <label className="form-label" htmlFor="source">
                          Source
                        </label>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter destination"
                          aria-label="Destination"
                        />
                        <label className="form-label" htmlFor="destination">
                          Destination
                        </label>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <select className="form-select" aria-label="Services">
                          <option defaultValue>Select</option>
                          <option value="1">Flight booking</option>
                          <option value="2">Jet Rent</option>
                          <option value="3">Helicopter Rent</option>
                        </select>
                        <label className="form-label" htmlFor="services">
                          Services
                        </label>
                      </div>
                      <div className="col">
                        <input type="date" className="form-control" />
                        <label className="form-label" htmlFor="date">
                          Choose Date
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Custom Enquiry
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4 text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
