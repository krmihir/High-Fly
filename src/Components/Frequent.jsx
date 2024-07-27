import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import delhi from "./../Images/delhi.jpg";
import ahemdabad from "./../Images/ahemdabad.jpg";
import bengaluru from "./../Images/bengaluru.webp";
import chennai from "./../Images/chennai.jpg";
import goa from "./../Images/goa.jpg";
import hyderabad from "./../Images/hyderabad.jpg";
import kolkata from "./../Images/kolkata.jpg";
import mumbai from "./../Images/mumbai.jpg";
import pune from "./../Images/pune.jpg";

const Frequent = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={delhi} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Delhi to Mumbai</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={mumbai} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Mumbai to Bengaluru</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={bengaluru} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Delhi to Bengaluru</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={hyderabad} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Hyderabad to Bengaluru</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={chennai} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Delhi to Chennai</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={kolkata} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Kolkata to Delhi</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={goa} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Mumbai to Goa</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={ahemdabad} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Delhi to Ahemdabad</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card h-100" style={{ backgroundColor: "#d3d6db" }}>
              <img src={pune} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-around">
                <h5 className="card-title">Delhi to Pune</h5>
                <h6 className="card-title">From 3000/-</h6>
              </div>
              <div className="card-body d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  VIEW
                </a>
                <a href="#" className="btn btn-primary">
                  BOOK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frequent;
