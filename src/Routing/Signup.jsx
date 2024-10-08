import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   to hold value in local storage
  const arr = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    arr.push(input);
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                className="card mt-5"
                style={{ borderRadius: "15px", backgroundColor: "#d3d6db" }}
              >
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lggradient-custom-4 text-body text-white"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
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

export default Signup;
