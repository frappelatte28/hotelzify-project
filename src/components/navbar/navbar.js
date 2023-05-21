import React from "react";
import "../navbar/navbar.css";
import MobileLogo from "../../assets/phone-icon-black-and-white-17.jpg";
import EmailLogo from "../../assets/black-and-white-email-icon-1.jpg";
import Logo from "../../assets/logo.png";
import ContactLayout from "../contact-layout/contact-layout.js";
import Header from "../header/header";
export default function Navbar() {
  return (
    <header className="position-fixed navbar">
      <Header />
      <div className="navigation-items row">
        <div className="menu-list-items col">
          <span>Home</span>
          <span>Rooms</span>
          <span>News</span>
          <span>Contact</span>
        </div>
        <div className="col">
          <img src={Logo}></img>
        </div>
        <div className="contact-layout-wrapper col row">

          <div className="col">
          <ContactLayout
            logo={<img className="contact-image" src={MobileLogo}></img>}
            title="Phone number"
            contactDetail="+908 987 877 09"
          />
          </div>
          <div className="col">
          <ContactLayout
            logo={<img className="contact-image" src={EmailLogo}></img>}
            title="Email Address"
            contactDetail="example@example.com"
          />
          </div>
          
        </div>
      </div>
    </header>
  );
}

