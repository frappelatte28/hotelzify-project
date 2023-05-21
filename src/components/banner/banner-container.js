import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./banner.css";
import RoomImage1 from "../../assets/room1.jpg";
import RoomImage2 from "../../assets/room2.jpg";
import RoomImage3 from "../../assets/room3.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Item>
              <span className="banner-text">
                The ultimate luxury experience
              </span>
              <h1 className="title">
                The Perfect,
                <br /> Base for you!
              </h1>
              <ul className="list-items">
                <li>
                  <button class="main-btn btn-filled">take a tour</button>
                </li>
                <li>
                  <button class="main-btn btn-border">Learn More</button>
                </li>
              </ul>
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>
              <img
                className="rooms-image"
                src={roomsImageArr[imageIndex]}
              ></img>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="main-date-container">
        <div className="date-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Arrival Date" />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Departure Date" />
          </LocalizationProvider>
          <TextField id="standard-basic" label="Guests" variant="standard" />
          <Button className="availability-button">Check Avaialability</Button>
        </div>
      </div>
    </div>
  );
}
