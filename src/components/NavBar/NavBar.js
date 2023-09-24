import React from "react";
import "./NavBar.css"; // Import the CSS file for styling
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  customButton: {
    borderRadius: "40px", // Adjust the value to change the corner radius
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "gray", // Adjust hover color if needed
    },
  },
  buttonContainer: {
    position: "fixed",
    top: "45px",
    right: "30px",
    display: "flex",
    flexDirection: "row",
    zIndex: 1, // Ensure the buttons are on top of other elements
  },
  buttonSpacing: {
    marginRight: "20px", // Adjust the margin to create space between buttons
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className="navbar">
      <h1>Ride Easy</h1>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={`${classes.customButton} ${classes.buttonSpacing}`}
        >
          Sign Up
        </Button>
        <Button variant="contained" className={classes.customButton}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
