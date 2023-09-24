import React from "react";
import backgroundImage from "../../assets/1.jpg";

const Body = () => {
  return (
    <div>
      <div className="background">
        <img src={backgroundImage} alt="Background" />
      </div>
    </div>
  );
};

export default Body;
