import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
  const footerStyle = {
    height: "200px", // Adjust the height as needed
    backgroundColor: "black",
    padding: "20px",
  };

  return (
    <MDBFooter className="text-center text-white" style={footerStyle}>
      <MDBContainer className="p-4">
        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          © 2023 Copyright:
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Ride Easy</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">FAQs</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="contact-info">
          <p>Phone: +94912232674</p>
          <p>Email: contact@rideeasy.com</p>
          <p>Address: Ride Easy Srilanka</p>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}
