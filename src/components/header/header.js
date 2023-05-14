import React from "react";
import ReactLogo from "../../assets/Envato Market Logo Vector.svg";
import "../header/header.css";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div>
      <div className="top-bar">
        <div className="header-logo-div">
          <img className="header-logo" src={ReactLogo} alt="Logo" />
        </div>
        <div className="buy-button-main">
          <Button className="buy-button" variant="outlined" disabled>
            CLick material
          </Button>
        </div>
      </div>
    </div>
  );
}
