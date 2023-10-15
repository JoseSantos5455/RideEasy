import React from "react";
import { useState } from "react";

const Admin = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const [homeAddress, sethomeAddress] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [error, seterror] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rider = {
      firstName,
      lastName,
      password,
      country,
      email,
      homeAddress,
      dateofBirth,
      phoneNumber,
    };
    const response = await fetch("/api/riders", {
      method: "POST",
      body: JSON.stringify(rider),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      seterror(json.error);
    }
    if (response.ok) {
      seterror(null);
      setfirstName("");
      setlastName("");
      setpassword("");
      setcountry("");
      setemail("");
      sethomeAddress("");
      setdateofBirth("");
      setphoneNumber("");
      console.log("new rider added", json);
    }
  };
  return (
    <div className="admin-container">
      {/* <div className="image-container">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1636501380/assets/7c/0d98ca-0968-4985-9eae-693ec18fde03/original/UberX-Share-Icon.png"
          alt="Uber Logo"
          className="image"
        />
      </div> */}
      <form className="createAdmin" onSubmit={handleSubmit}>
        <h1 style={{ fontFamily: "Poppins" }}>Create Rider Account</h1>

        <label style={{ fontFamily: "Poppins" }}>First Name</label>
        <input
          type="text"
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
        />

        <label style={{ fontFamily: "Poppins" }}>Last Name</label>
        <input
          type="text"
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
        />

        <label style={{ fontFamily: "Poppins" }}>Password</label>
        <input
          type="text"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <label style={{ fontFamily: "Poppins" }}>Email</label>
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <label style={{ fontFamily: "Poppins" }}>Country</label>
        <input
          type="text"
          onChange={(e) => setcountry(e.target.value)}
          value={country}
        />
        <label style={{ fontFamily: "Poppins" }}>Home Address</label>
        <input
          type="text"
          onChange={(e) => sethomeAddress(e.target.value)}
          value={homeAddress}
        />
        <label style={{ fontFamily: "Poppins" }}>Date Of Birth</label>
        <input
          type="date"
          onChange={(e) => setdateofBirth(e.target.value)}
          value={dateofBirth}
        />
        <label style={{ fontFamily: "Poppins" }}>Phone Number</label>
        <input
          type="text"
          onChange={(e) => setphoneNumber(e.target.value)}
          value={phoneNumber}
        />

        <button style={{ fontFamily: "Poppins" }}>Create</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Admin;
