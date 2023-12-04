import React from "react";
import "../../App.css";
import Hero from "../HomeSection/Hero";
import Welcome from "../welcome/Welcome";
import BestSellers from "../HomeSection/bestSellers/BestSellers";
import Video from "../video/Video";
import Features from "../HomeSection/Features/Features";
import BottomBanner from "../btmBanner/BottomBanner";
import Review from "../HomeSection/review/Review";
import Vlog from "../vlog/Vlog";
import Certifications from "../certifications/Certifications";
import Business from "../business/Business";
import MadIndia from "../mad4india/MadIndia";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <BestSellers />
      <Video />
      <Features />
      <BottomBanner />
      <Review />
      <Vlog />
      <Certifications />
      <Business />
      <MadIndia />
    </>
  );
};

export default Home;
