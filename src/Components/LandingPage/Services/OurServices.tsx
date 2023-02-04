import React from "react";
import styled from "styled-components";
import metalJunk from "../../../Assets/wasteTruck.jpg";
import { NavLink } from "react-router-dom";

const OurServices = () => {
  return (
    <div>
      <Container>
        <Title>
          <h1>Our Services</h1>
        </Title>
        <Services>
          <Card bg={metalJunk} to="/residential">
            <button>Residential Garbage Collection</button>
          </Card>
          <Card bg={metalJunk} to="/commercial">
            <button>Commercial waste Collection</button>
          </Card>
          <Card bg={metalJunk} to="/recycle">
            <button>Residential Recycling</button>
          </Card>
          <Card bg={metalJunk} to="/residential">
            <button>Yard waste removal</button>
          </Card>
        </Services>
      </Container>
    </div>
  );
};

export default OurServices;

// const Title = styled.div``
// const Title = styled.div``
// const Title = styled.div``
const Card = styled(NavLink)<{ bg: string }>`
  width: 310px;
  height: 220px;
  border-radius: 7px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 0 2px #a8a9b3;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  text-decoration: none;

  background-image: url(${(prop) => prop.bg});
  /* margin: 3px;
  border-radius: 5px;
  */

  button {
    margin-bottom: 50px;
    padding: 15px 20px;
    font-size: 12px;
    background-color: #fff;
    border: 0;
    border-radius: 5px;
    font-weight: 900;
    color: #00174f;
    text-transform: uppercase;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 20px;
      /* height: 5vh; */
      font-size: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 250px;
    margin: 10px;
  }
`;
const Services = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Title = styled.div`
  width: 95%;
  height: 10vh;
  margin: auto;
  display: flex;
  align-items: center;
  color: #00174f;

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 22px;
      font-weight: 600;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  /* padding-bottom: 20px; */
`;
