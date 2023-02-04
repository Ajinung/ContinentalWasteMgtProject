import React from "react";
import styled from "styled-components";
import plasticwaste from "../../Assets/plasticwaste.jpg";

const RecycleService = () => {
  return (
    <div>
      <Container>
        <First>
          <Right>
            <img src={plasticwaste} alt="" />
          </Right>
          <Left>
            <h1>Waste Connections Residential Recycling Services</h1>
            <p>
              We care about a cleaner environment and are increasing our efforts
              to make recycling in your area easier and more convenient. Our
              offerings across our network include:
            </p>

            <p>
              <ol>
                <li>Green waste recycling programs</li>
                <li>Separated or combined recyclables collection programs</li>
                <li>
                  Recycling cardboard, newspaper, plastic bottles, aluminum
                  cans, glass containers, and electronics
                </li>
              </ol>
            </p>
          </Left>
        </First>
      </Container>
    </div>
  );
};

export default RecycleService;

const Title = styled.h1`
  margin: 0;
  margin-top: 30px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Desc = styled.p`
  font-size: 20px;
  width: 950px;
  text-align: center;
`;

const Right = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* object-position: center; */
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #c9142c13;
    position: absolute;
  }
`;
const Left = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */

  h1 {
    width: 80%;
    text-align: center;
    font-weight: 500;
    margin: 0;

    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 1.5rem;
      margin-top: 15px;
    }
  }
  p {
    /* margin: 60px; */
    width: 70%;
    margin-left: 80px;
    font-size: 18.8px;
    font-weight: 500;
    color: #00000096;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: 10px;
      font-size: 16.5px;
    }
  }

  li {
    margin: 10px;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0;
      /* font-size: 1.5rem;
      margin-top: 15px; */
      /* margin */
    }
  }
`;

const First = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  /* height: 100vh; */
  color: #00174f;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
