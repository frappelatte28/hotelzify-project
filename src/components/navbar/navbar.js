import React from "react";
import "../navbar/navbar.css";
import MobileLogo from "../../assets/phone-icon-black-and-white-17.jpg";
import EmailLogo from "../../assets/black-and-white-email-icon-1.jpg";
import Logo from "../../assets/logo.png";
import ContactLayout from "../contact-layout";
export default function Navbar() {
  return (
    <header>
      <div className="navigation-items">
        <div className="menu-list-items">
          <span>Home</span>
          <span>Rooms</span>
          <span>News</span>
          <span>Contact</span>
        </div>
        <div>
          <img src={Logo}></img>
        </div>
        <div className="contact-layout-wrapper">
          <ContactLayout
            logo=<img className="contact-image" src={MobileLogo}></img>
            title="Phone number"
            contactDetail="+908 987 877 09"
          />
          <ContactLayout
            logo=<img className="contact-image" src={EmailLogo}></img>
            title="Email Address"
            contactDetail="example@example.com"
          />
        </div>
      </div>
    </header>
  );
}
