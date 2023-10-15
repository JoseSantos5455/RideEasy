import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  customButton: {
    borderRadius: "40px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    marginRight: "30px",
  },
  buttonContainer: {
    zIndex: 100,
    position: "sticky",
    top: "0",
    backgroundColor: "gray",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <h1>Ride Easy</h1>
      <div>
        <Button variant="contained" className={classes.customButton}>
          Sign In
        </Button>
        <Button variant="contained" className={`${classes.customButton}`}>
          <Link
            to="/signup"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </Button>
        <Button variant="contained" className={classes.customButton}>
          <Link
            to="/admin"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Admin
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
