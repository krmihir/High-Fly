import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Search from "../Components/Search.jsx";
import Frequent from "../Components/Frequent.jsx";

const Home = () => {
  return (
    <>
      <>
        <div
        // style={{
        //   backgroundImage: `url(${home_bg})`,
        //   // height: "55vh",
        //   // objectFit: "fit",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
        >
          <Search />
          <Frequent />
        </div>
      </>
    </>
  );
};

export default Home;
