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
      <div className="about-heading">
        <div>
          Situated In Prime Position At The Foot Of The Slopes Of Courchevel
          Moriond.
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="grid-layout" columns={10} container spacing={1}>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item1">
              <div className="about-image-card">
                <img className="about-section-image" src={BoiledChicken}></img>
                <h3>Chicken</h3>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item2">
              <div className="about-image-card">
                <img className="about-section-image" src={Pizza}></img>
                <h3>Italian</h3>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item3">
              <div className="about-image-card">
                <img className="about-section-image" src={Coffee}></img>
                <h3>Coffee </h3>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item4">
              <div className="about-image-card">
                <img className="about-section-image" src={Cake}></img>
                <h3>Bake cake</h3>
              </div>
            </Item>
          </Grid>
          <Grid className="grid-layout-item" item xs={2}>
            <Item className="grid-item5">
              <div className="about-image-card">
                <img className="about-section-image" src={Cookie}></img>
                <h3>Cookies</h3>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}