import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  customButton: {
    borderRadius: "40px", // Adjust the value to change the corner radius
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "lightgray", // Adjust hover color if needed
    },
    marginRight: "30px", // Adjust margin to create space between buttons
  },
  buttonContainer: {
    zIndex: 100, // Ensure the buttons are on top of other elements
    position: "sticky", // Change to "sticky" to stick the navbar to the top
    top: "0",
    backgroundColor: "gray", // Background color for the navbar
    padding: "10px 20px", // Padding for the navbar
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Align items vertically
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <h1>Ride Easy</h1>
      <div>
        <Button variant="contained" className={`${classes.customButton}`}>
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
