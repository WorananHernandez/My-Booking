import React from "react";
import "./mailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h2 className="mailTitle">Subscribe to get special deals</h2>
      <span className="mailDesc">
        Join us and receive timely notifications about our exclusive deals.
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
