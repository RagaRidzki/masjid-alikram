import React from "react";
import Logo from "../assets/images/logo.svg";
import { Navbar } from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Progress from "../components/sections/Progress";
import Banner from "../components/sections/Banner";
import Benefit from "../components/sections/Benefit";
import Step from "../components/sections/Step";
import Table from "../components/sections/Table";
import Gallery from "../components/sections/Gallery";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <html lang="id" class="scroll-smooth" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      <Hero />

      <Progress />

      <Banner />

      <Benefit />

      <Step />

      <Table />

      <Gallery />

      <Footer />
    </>
  );
};

export default Home;
