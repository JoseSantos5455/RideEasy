import React from "react";
import "./FourRides.css";
import blackRide from "../../assets/2.png";
import ERide from "../../assets/3.png";
import suvRide from "../../assets/4.png";
import tuktukRide from "../../assets/5.png"; // Import your image

const FourRides = () => {
  return (
    <div>
      <div className="cardFourRides">
        <img src={blackRide} alt="blackCar" className="cardImage" />
        Luxury Ride
      </div>
      <div className="cardFourRidesE">
        <img src={ERide} alt="ERide" className="cardImage" />E Ride
      </div>
      <div className="cardFourRides">
        <img src={suvRide} alt="suvRide" className="cardImage" />
        SUV Ride
      </div>
      <div className="cardFourRides">
        <img src={tuktukRide} alt="tuktukRide" className="cardImage" />
        Tuk Tuk Ride
      </div>
    </div>
  );
};

export default FourRides;
