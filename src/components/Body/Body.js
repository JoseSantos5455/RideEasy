import React from "react";
import backgroundImage from "../../assets/1.jpg";
import "./Body.css"; // Import your CSS for styling

const Body = () => {
  return (
    <div className="background">
      <img src={backgroundImage} alt="Background" />
      <div className="overlay">
        <div className="card">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
