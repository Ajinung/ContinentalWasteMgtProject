import React from "react";
import styled from "styled-components";
import banner from "../../Assets/banner.jpg";
import { NavLink } from "react-router-dom";

const RedBanner = () => {
  return (
    <div>
      <Container>
        <BannerTitle>
          <h2>Continental waste managers</h2>
          <h1>Residential Services</h1>
          <ButtonWrapper>
            <Button to="/paybill">Pay my Bill</Button>
            <Button to="/recycle">Recycle Waste</Button>
            <Button to="/contact">Customer Support</Button>
          </ButtonWrapper>
        </BannerTitle>
      </Container>
    </div>
  );
};

export default RedBanner;

// const BannerTitle = styled.div``
const Button = styled(NavLink)`
  padding: 10px 20px;
  margin: 5px;
  margin-right: 10px;
  background-color: #fff;
  color: #00174f;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  ::selection {
    background: #b3d4fc;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 140px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
    width: 130px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  color: #00174f;
`;
const BannerTitle = styled.div`
  width: 670px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0px;
  /* align-items: center; */

  h2 {
    margin: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 100;
    font-size: 18px;

    @media screen and (max-width: 7685px) {
      padding-left: 15px;
    }
    @media screen and (max-width: 425px) {
      font-size: 18px;
      padding: 5px;
    }
  }
  h1 {
    margin: 0;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (max-width: 7685px) {
      padding-left: 15px;
      font-size: 30px;
    }

    @media screen and (max-width: 425px) {
      font-size: 24px;
      text-align: center;
      font-weight: 700;
      padding: 5px;
    }
  }

  ::selection {
    background: #b3d4fc;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Container = styled.div`
  width: 100%;
  background-color: #00174f;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;