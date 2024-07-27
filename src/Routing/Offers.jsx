import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import students from "./../Images/students.avif";
// import senior_citizen from "./../Images/senior_citizen.jpg";
// import armed_force from "./../Images/armed_force.jpg";
// import bank_offers from "./../Images/bank_offers.jpg";
// import international_bookings from "./../Images/international_bookings.png";
// import domestic_bookings from "./../Images/domestic_bookings.jpeg";

const Offers = () => {
  const offer = [
    {
      pic: "src/Images/students.avif",
      title: "Students",
      description:
        "Unlock exclusive student discounts on flight bookings! Travel smart and save big. Book now and enjoy your journey!",
    },
    {
      pic: "src/Images/senior_citizen.jpg",
      title: "Senior Citizen",
      description:
        "Enjoy senior citizen discounts on flight bookings! Travel comfortably and save more. Book now for a hassle-free journey!",
    },
    {
      pic: "src/Images/armed_force.jpg",
      title: "Armed Force",
      description:
        "Exclusive discounts for armed forces on flight bookings! Travel with pride and save. Book now for a seamless journey!",
    },
    {
      pic: "src/Images/bank_offers.jpg",
      title: "Bank Offer",
      description:
        "Save big on flight bookings with exclusive bank offers! Enjoy discounts and travel benefits. Book now with your bank card!",
    },
    {
      pic: "src/Images/international_bookings.png",
      title: "International Bokkings",
      description:
        "Explore the world with exclusive discounts on international flight bookings! Save big and travel more. Book your adventure now!",
    },
    {
      pic: "src/Images/domestic_bookings.jpeg",
      title: "Domestic Bookings",
      description:
        "Fly across the country with special discounts on domestic flights! Save more and travel smarter. Book your tickets now!",
    },
  ];
  return (
    <>
      <div className="container text-center">
        <h1 className="text-center mt-4">Exciting Offers...</h1>
        <div className="row mt-4">
          {offer.map((currentItem) => {
            return (
              <div className="col-lg-4 col-md-6 mb-3">
                <div
                  className="card h-100"
                  style={{ backgroundColor: "#d3d6db" }}
                >
                  <div className="row g-0 h-100">
                    <div className="col-md-4">
                      <img
                        src={currentItem.pic}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{currentItem.title}</h5>
                        <p className="card-text">{currentItem.description}</p>
                        <a href="#" className="btn btn-primary">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offers;
