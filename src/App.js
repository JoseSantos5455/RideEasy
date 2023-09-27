import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import FourRides from "./components/FourRides/FourRides";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <FourRides />
      <Footer />
    </div>
  );
};

export default App;
