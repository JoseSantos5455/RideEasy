import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import FourRides from "./components/FourRides/FourRides";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/four-rides" element={<FourRides />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
