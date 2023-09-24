import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import FourRides from "./components/FourRides/FourRides";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <FourRides />
    </div>
  );
};

export default App;
