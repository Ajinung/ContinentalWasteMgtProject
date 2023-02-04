import React from "react";
import styled from "styled-components";
import dangote from "../../../Assets/Dangote.svg";
import zenith from "../../../Assets/zenith.png";
import providus from "../../../Assets/Providus.png";
import biscuit from "../../../Assets/biscuits.webp";
import port from "../../../Assets/apapa-port.webp";
import lamis from "../../../Assets/lamis.avif";
import globus from "../../../Assets/gblobus.png";

const Association = () => {
  return (
    <div>
      <Container>
        <BannerTitle>
          <h2>Associations</h2>
          <h1>COMPANIES WE ARE ASSOCIATED WITH.</h1>
          <ImageHolder>
            <Image>
              <img src={dangote} alt="" />
            </Image>
            <Image>
              <img src={zenith} alt="" />
            </Image>
            <Image>
              <img src={providus} alt="" />
            </Image>
            <Image>
              <img src={biscuit} alt="" />
            </Image>
            <Image>
              <img src={lamis} alt="" />
            </Image>
            <Image>
              <img src={globus} alt="" />
            </Image>
            <Image>
              <img src={port} alt="" />
            </Image>
          </ImageHolder>
        </BannerTitle>
      </Container>
    </div>
  );
};

export default Association;

const Image = styled.div`
  width: 180px;
  height: 150px;
  margin: 5px;
  margin-right: 10px;
  background-color: #ffffffab;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all 0.3s ease;

  ::selection {
    background: #b3d4fc;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 120px;
    height: 130px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
    width: 120px;
    height: 120px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #00174f;
`;
const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0px;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 300;

    @media screen and (max-width: 7685px) {
      padding-left: 15px;
    }
    @media screen and (max-width: 425px) {
      font-size: 20px;
      padding: 5px;
    }
  }
  h1 {
    max-width: 750px;
    font-size: 35px;
    font-weight: 500;
    line-height: 40px;
    margin: 0;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 30px;
    /* font-weight: 500; */

    @media screen and (max-width: 425px) {
      font-size: 24px;
      text-align: center;
      font-weight: 700;
      padding: 5px;
    }
    @media screen and (max-width: 7685px) {
      padding-left: 15px;
    }
  }

  ::selection {
    background: #b3d4fc;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Container = styled.div`
  width: 100%;
  background-color: #f1f1f195;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  color: #00174f;
`;
