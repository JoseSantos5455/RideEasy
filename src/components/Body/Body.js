import React from "react";
import backgroundImage from "../../assets/1.jpg";
import "./Body.css"; // Import your CSS for styling
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  customButton: {
    borderRadius: "40px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    marginTop: "-20px", // Adjust margin to move the button up
    fontSize: "18px",
    padding: "10px 20px",
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <div className="background">
      <img src={backgroundImage} alt="Background" />
      <div className="overlay">
        <div className="card">
          <div className="top">
            Drive&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ride
          </div>
          <div className="bottom">
            <p>Get in the driver's seat and get paid</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" className={classes.customButton}>
                Sign Up
              </Button>
            </div>
            <div className="bottomlast">
              Drive on the platform with the largest network of active riders.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
