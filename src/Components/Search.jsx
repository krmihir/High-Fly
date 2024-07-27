import React, { useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import home_bg from "./../Images/home_bg.jpg";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import Flightdetails from "../Routing/Flightdetails.jsx";

const Search = () => {
  // const [search, setSearch] = useState({
  //   travel_class: "",
  //   departure_id: "",
  //   arrival_id: "",
  //   outbound_date: "",
  // });

  const [travel, setTravel] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [onbound, setOnbound] = useState("");
  const [flightData, setFlightData] = useState("");

  const myFunc = async () => {
    try {
      const resp = await axios.get(
        `https://serpapi.com/search.json?engine=google_flights&departure_id=${departure}&arrival_id=${arrival}&outbound_date=${onbound}&currency=INR&stops=1&travel_class=${travel}&type=2&hl=en&api_key=b01cc8e202435a2ee97f3b6552839b7130d7615a7a4971c21fd9c90071e0748b`
      );
      if (!resp.data.best_flights) {
        alert("No flights Found!");
        return;
      } else {
        console.log(resp.data.best_flights);
        setFlightData(resp.data.best_flights);
      }
    } catch (error) {
      console.error("error occured", error);
    }
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setDetails((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };
  //
  // console.log(details);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${home_bg})`,
          height: "60vh",
          objectFit: "cover",
          // objectFit: "fit",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="col-12 col-md-10 col-lg-8">
              <div
                className="rounded p-3 bg-cp"
                style={{ backgroundColor: "#d3d6db" }}
              >
                <div className="row mb-1">
                  <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <label htmlFor="travel_class" className="fw-bold fs-8">
                      Travel Class
                    </label>
                    <select
                      className="form-select"
                      id="travel_class"
                      name="travel_class"
                      onChange={(e) => {
                        setTravel(e.target.value);
                      }}
                    >
                      <option defaultValue>Select</option>
                      <option value="1">Economy</option>
                      <option value="2">Premium Economy</option>
                      <option value="3">Business</option>
                      <option value="4">First</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <label
                      htmlFor="departure_id"
                      className="form-label fw-bold fs-8 m-0"
                    >
                      From
                    </label>
                    <input
                      className="form-control"
                      list="datalistOptions"
                      id="departure_id"
                      placeholder="Enter Source"
                      name="departure_id"
                      onChange={(e) => {
                        setDeparture(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <label
                      htmlFor="arrival_id"
                      className="form-label fw-bold fs-8 m-0"
                    >
                      To
                    </label>
                    <input
                      className="form-control"
                      list="datalistOptions"
                      id="arrival_id"
                      placeholder="Enter Destination"
                      name="arrival_id"
                      onChange={(e) => {
                        setArrival(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <label htmlFor="outbound_date" className="fw-bold fs-8">
                      Depart
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="outbound_date"
                      name="outbound_date"
                      onChange={(e) => {
                        setOnbound(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div
                  className="btn btn-primary fw-bold btn-lg inp-width mt-3 mt-md-0"
                  onClick={myFunc}
                >
                  Search Flight
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Flightdetails detail={flightData} />
    </>
  );
};

export default Search;
