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
    <div class="container">
      <div class="column1">{props.logo}</div>
      <div class="column1-row1">{props.title}</div>
      <div class="column2-row2">{props.contactDetail}</div>
    </div>
  );
}
