import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner-container";
import About from "./components/section-two/about-section";
import Roomtype from ".//components/room-type/room-types";
import Footer from "./components/footer/footer";
import Cta from "./components/cta/cta";


export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div>
      <About />
      </div>
      
      
      <Roomtype />
      <Cta />
      <Footer />
    </div>
  );
}
