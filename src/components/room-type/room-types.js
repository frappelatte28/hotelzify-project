import React from "react";
import "./room-type.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RoomImage1 from "../../assets/room1.jpg";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AiOutlineArrowRight from "@mui/icons-material/ArrowForwardIos";

export default function Roomtype() {
  return (
    <div>
      <section className="room-type-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title ">
                <span className="title-tag">room type</span>
                <h2>Inspired Loding</h2>
              </div>
            </div>
            <div className="col room-types">
              <div className="row">
                <div className="col room-types-tab">
                  <button type="button" className="btn btn-lg rounded-0">
                    Luxury
                  </button>
                </div>

                <div className="col">
                  <button type="button" className="btn btn-lg rounded-0">
                    Family
                  </button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-lg rounded-0">
                    Double Bed
                  </button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-lg border rounded-0">
                    Relax
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="room-cards-container">
            <div className="row h-100">
              <div>
                <div className="row  h-100">
                  <div className="row">
                    <Grid container spacing={2}>
                      <Grid item xs={6} style={{ height: "100%" }}>
                        <Grid container style={{ height: "100%" }}>
                          <Grid item xs={12} style={{ height: "100%" }}>
                            <Grid
                              container
                              style={{ height: "50%" }}
                              spacing={1}
                            >
                              <Grid item xs={6}>
                                <RoomUnit image={RoomImage1}></RoomUnit>
                              </Grid>
                              <Grid item xs={6}>
                                <RoomUnit image={RoomImage1}></RoomUnit>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              style={{ height: "50%" }}
                              spacing={1}
                            >
                              <Grid item xs={12} style={{ paddingTop: "7%" }}>
                                <RoomUnit image={RoomImage1}></RoomUnit>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        {" "}
                        <RoomUnit image={RoomImage1}></RoomUnit>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function RoomUnit({ rooms = 5, type = "default", image }) {
  return (
    <div style={{ height: "100%" }}>
      <div className="room-box" style={{ height: "100%" }}>
        <div
          className="room-bg"
          style={{
            backgroundImage: `url(${image})`,
            height: "100%",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="room-content">
          <span className="room-count">
            <i className="fal fa-th"></i>
            {rooms} Rooms
          </span>
          <h3>
            <a href="/themes/react/miranda/room-details/1">{type}</a>
          </h3>
        </div>
        <a className="room-link" href="/themes/react/miranda/room-details/1">
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
}
