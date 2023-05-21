import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./banner.css";
import RoomImage1 from "../../assets/room1.jpg";
import RoomImage2 from "../../assets/room2.jpg";
import RoomImage3 from "../../assets/room3.jpg";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
let roomsImageArr = [RoomImage1, RoomImage2, RoomImage3];
console.log("start", Date.now());
let d = Date.now();
export default function Banner() {
  const [imageIndex, setImageIndex] = useState(0);
  function rotateImage() {
    let id = setInterval(() => {
      setImageIndex((prevIndex) => {
        return (prevIndex + 1) % roomsImageArr.length;
      });
    }, 6000);
    return function () {
      clearInterval(id);
    };
  }
  useEffect(rotateImage, []);
  console.log("before resturn", (Date.now() - d) / 1000);

  return (
    <div className="banner-main-container">
      <div className="row h-100">
       
          <div  className="col-6 hero-title-parent">
            <div className="w-100 hero-title">
              <span className="banner-text">
                The ultimate luxury experience
              </span>
              <h1 className="title">
                The Perfect,
                <br /> Base for you!
              </h1>

              <div className="row booking-cta">
                <div className="col-6">
                  <button
                    class="main-btn btn-filled"
                    href="/themes/react/miranda/room-details/1"
                  >
                    take a tour
                  </button>
                </div>
                <div className="col-6">
                  <button
                    class="main-btn btn-border"
                    href="/themes/react/miranda/about"
                  >
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="col-6 h-100">
            <div className="overflow-hidden h-100">
              <img
                className="rooms-image"
                src={roomsImageArr[imageIndex]}
              ></img>
            </div>
          </div>

          </div>
        
  
    </div>
  );
}
