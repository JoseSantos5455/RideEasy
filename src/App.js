import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import Body from "./components/Body/Body";
// import FourRides from "./components/FourRides/FourRides";
// import Footer from "./components/Footer/Footer";
// import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
