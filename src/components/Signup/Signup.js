import React, { useEffect, useState } from "react";
import AccountDetails from "./AccountDetails";
import RiderCreate from "./RiderCreate";
const Signup = () => {
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const response = await fetch("/api/riders");
        const data = await response.json();

        if (response.ok) {
          setRiders(data); // Assuming data is an array of riders
        }
      } catch (error) {
        console.error("Error fetching riders:", error);
      }
    };

    fetchRiders();
  }, []);

  return (
    <div>
      {/* <div className="riders">
        {riders &&
          riders.map((rider) => {
            console.log("Rider Data:", rider);
            return <AccountDetails rider={rider} key={rider._id} />;
          })}
      </div> */}
      <RiderCreate />
    </div>
  );
};
export default Signup;
