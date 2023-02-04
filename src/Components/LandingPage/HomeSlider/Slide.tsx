import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideProp from "./SlideProp";
import metalJunk from "../../../Assets/wasteTruck.jpg";
import metalJunk2 from "../../../Assets/plasticwaste.jpg";
import metalJunk3 from "../../../Assets/dirt.jpg";
import metalJunk4 from "../../../Assets/trash.jpg";

const Slide = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div>
      <Container>
        <Slider {...settings}>
          <SlideProp
            title="Garbage Pickup."
            desc="Continental Waste Managers Offers Convenient Pickup Times And Reliable Service."
            bg={metalJunk}
          />
          <SlideProp
            title="Garbage Pickup."
            desc="Continental Waste Managers Offers Convenient Pickup Times And Reliable Service."
            bg={metalJunk2}
          />
          <SlideProp
            title="Garbage Pickup."
            desc="Continental Waste Managers Offers Convenient Pickup Times And Reliable Service."
            bg={metalJunk3}
          />
          <SlideProp
            title="Garbage Pickup."
            desc="Continental Waste Managers Offers Convenient Pickup Times And Reliable Service."
            bg={metalJunk4}
          />
        </Slider>
      </Container>
    </div>
  );
};

export default Slide;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  /* margin-top: 20px; */
`;
