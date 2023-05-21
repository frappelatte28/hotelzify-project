import React from "react";
import "./room-type.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RoomImage1 from "../../assets/room1.jpg";
import RoomImage2 from "../../assets/room2.jpg";
import RoomImage3 from "../../assets/room3.jpg";

import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AiOutlineArrowRight from "@mui/icons-material/ArrowForwardIos";
import GridOnRoundedIcon from "@mui/icons-material/GridOnRounded";
import { Button } from "@mui/material";
export default function Roomtype() {
  return (
    <div>
      <section className="room-type-section">
        <div
          className="container"
          style={{ position: "relative", zIndex: 2, height: "100vh" }}
        >
          <div className="row" style={{ marginBottom: "2.5%" }}>
            <div className="col">
              <div className="section-title ">
                <span className="title-tag">room type</span>
                <h2>Inspired Loding</h2>
              </div>
            </div>
            <div className="col room-types">
              <div className="row">
                <div className="col room-types-tab">
                  <Button
                    type="button"
                    className="btn btn-lg rounded-0"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Luxury
                  </Button>
                </div>

                <div className="col">
                  <Button
                    type="button"
                    className="btn btn-lg rounded-0"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Family
                  </Button>
                </div>
                <div className="col">
                  <Button
                    type="button"
                    className="btn btn-lg rounded-0"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Double Bed
                  </Button>
                </div>
                <div className="col">
                  <Button
                    type="button"
                    className="btn btn-lg border rounded-0"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    Relax
                  </Button>
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
                      <Grid item xs={8} style={{ height: "100%" }}>
                        <Grid container style={{ height: "100%" }}>
                          <Grid item xs={12} style={{ height: "100%" }}>
                            <Grid
                              container
                              style={{ height: "50%" }}
                              spacing={1}
                            >
                              <Grid item xs={6}>
                                <RoomUnit
                                  type="Pendora Fame"
                                  rooms="05"
                                  image={RoomImage1}
                                ></RoomUnit>
                              </Grid>
                              <Grid item xs={6}>
                                <RoomUnit
                                  image={RoomImage2}
                                  type="Pacific Room"
                                  rooms="10"
                                ></RoomUnit>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              style={{ height: "50%" }}
                              spacing={1}
                            >
                              <Grid item xs={12} style={{ paddingTop: "4.5%" }}>
                                <RoomUnit
                                  image={RoomImage3}
                                  type="Luxufy Hall of Fame"
                                  rooms="03"
                                ></RoomUnit>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        {" "}
                        <RoomUnit
                          image={RoomImage1}
                          type="Junior  Suite"
                          rooms="12"
                        ></RoomUnit>
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
            <GridOnRoundedIcon></GridOnRoundedIcon>
            <span>{rooms} Rooms</span>
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
