import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import FourRides from "./components/FourRides/FourRides";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";

import AdminData from "./components/Admin/AdminData";
const App = () => {
  return (
    <Router>
      <NavBar /> {/* Render NavBar outside Routes */}
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminData />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainPage = () => {
  return (
    <div>
      <Body />
      <FourRides />
      <Footer />
    </div>
  );
};

export default App;
