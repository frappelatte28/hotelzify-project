import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./contact-layout.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ContactLayout(props) {
  return (
    <div class="container-layout row g-1">
      <div class="column1 col-2">{props.logo}</div>
      <div class="col-10">
        <div className="row">
          <div class="col-12">{props.title}</div>
         <p class="col-12 fw-bold">{props.contactDetail}</p>
        </div>
      </div>
      
    </div>
  );
}
