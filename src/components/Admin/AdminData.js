import React, { useEffect, useState } from "react";
import AccountDetails from "../Signup/AccountDetails";
import Admin from "./Admin";
import "./AdminData.css"; // Import the CSS for styling

const AdminData = () => {
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const response = await fetch("/api/riders");
        const data = await response.json();

        if (response.ok) {
          setRiders(data);
        }
      } catch (error) {
        console.error("Error fetching riders:", error);
      }
    };

    fetchRiders();
  }, []);

  return (
    <div className="admin-data-container">
      <div className="left-section">
        <div className="riders">
          {riders &&
            riders.map((rider) => {
              console.log("Rider Data:", rider);
              return <AccountDetails rider={rider} key={rider._id} />;
            })}
        </div>
      </div>
      <div className="right-section">
        <Admin />
      </div>
    </div>
  );
};

export default AdminData;
