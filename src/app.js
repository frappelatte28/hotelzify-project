import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner-container";
import About from "./components/section-two/about-section";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}
