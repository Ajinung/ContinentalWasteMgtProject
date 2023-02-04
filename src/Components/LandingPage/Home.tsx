import React from "react";
import Association from "./Associations/Association";
import Header from "../HeaderComp/Header";
import Banner from "./HomeBanner/Banner";
import Slide from "./HomeSlider/Slide";
import OurServices from "./Services/OurServices";
import StartService from "./Services/StartService";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}

      <Slide />
      <Banner />
      <OurServices />
      <StartService />
      <Association />
    </div>
  );
};

export default Home;
