import React from "react";
import "./about.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BoiledChicken from "../../assets/boiled-chicken.png";
import Coffee from "../../assets/coffee-cup.png";
import Cookie from "../../assets/cookie.png";
import Cake from "../../assets/muffin.png";
import Pizza from "../../assets/pizza.png";
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
export default function About() {
  return (
    <div>
            <div className="main-date-container">
        <div className="date-container">
          <div className="row" style={{ position: "relative" }}>
            <div className="col">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Arrival " />
              </LocalizationProvider>

            </div>
            <div className="col">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Departure " />
              </LocalizationProvider>
            </div>
            <div className="col">
              <TextField id="standard-basic" label="Guests" variant="standard" />

            </div>
            <div className="col">
              <Button className="availability-button">Check Avaialability</Button>

            </div>
          </div>


        </div>
      </div>
      <div className="about-heading">
        <div>
          Situated In Prime Position At The Foot Of The Slopes Of Courchevel
          Moriond.
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="grid-layout" columns={10} container spacing={3}>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item1">
              <div className="about-image-card">
                <img className="about-section-image" src={BoiledChicken}></img>
                <p
                  style={{
                    letterSpacing: "1px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    paddingTop: "10px",
                  }}
                >
                  Chicken
                </p>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item2">
              <div className="about-image-card">
                <img className="about-section-image" src={Pizza}></img>
                <p
                  style={{
                    letterSpacing: "1px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    paddingTop: "10px",
                  }}
                >
                  Italian
                </p>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item3">
              <div className="about-image-card">
                <img className="about-section-image" src={Coffee}></img>
                <p
                  style={{
                    letterSpacing: "1px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    paddingTop: "10px",
                  }}
                >
                  Coffee{" "}
                </p>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item4">
              <div className="about-image-card">
                <img className="about-section-image" src={Cake}></img>
                <p
                  style={{
                    letterSpacing: "1px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    paddingTop: "10px",
                  }}
                >
                  Bake cake
                </p>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item5">
              <div className="about-image-card">
                <img className="about-section-image" src={Cookie}></img>
                <p
                  style={{
                    letterSpacing: "1px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    paddingTop: "10px",
                  }}
                >
                  Cookies
                </p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
