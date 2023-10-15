import React from "react";

const AccountDetails = ({ rider }) => {
  return (
    <div className="rider-details-admin">
      <h4>{rider.firstName}</h4>
      <p>
        <strong>Last Name: </strong>
        {rider.lastName}
      </p>
      <p>
        <strong>Password: </strong>
        {rider.password}
      </p>
      <p>
        <strong>Country: </strong>
        {rider.country}
      </p>
      <p>
        <strong>Email: </strong>
        {rider.email}
      </p>
      <p>
        <strong>Home Address: </strong>
        {rider.homeAddress}
      </p>
      <p>
        <strong>Phone Number: </strong>
        {rider.phoneNumber}
      </p>
      <p>
        <strong>Date Of Birth: </strong>
        {rider.dateofBirth}
      </p>
      <p>
        <strong>Created: </strong>
        {rider.createdAt}
      </p>
    </div>
  );
};

export default AccountDetails;
