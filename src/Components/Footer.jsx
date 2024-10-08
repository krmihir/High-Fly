import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
              <p className="mb-0 fs-4">© 2024 High-Fly. All Rights Reserved.</p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <a href="#" className="text-white me-3 fs-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white me-3 fs-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white me-3 fs-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white me-3 fs-4">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-white fs-4">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
