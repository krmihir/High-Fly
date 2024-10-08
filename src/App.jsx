import React from "react";
import Navbar from "./Routing/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Login from "./Routing/Login";
import Signup from "./Routing/Signup";
import Offers from "./Routing/Offers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
