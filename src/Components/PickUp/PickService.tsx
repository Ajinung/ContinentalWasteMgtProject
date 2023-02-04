import React from "react";
import styled from "styled-components";
import garbage from "../../Assets/Wastejunk.jpg";
import wasteman from "../../Assets/wasteman.jpg";
import StartService from "../LandingPage/Services/StartService";

const PickService = () => {
  return (
    <div>
      <Container>
        <First>
          <Right>
            <img src={wasteman} alt="" />
          </Right>
          <Left>
            <h1>Waste Pick Up Services</h1>
            <p>
              If you have a bulk item for pickup, call our office and we will
              send a truck to your location. ​ Examples of bulky items would be:
              water heaters, washers, dryers, furniture, etc. Please confirm
              pick-up date before placing an item at the curb.
            </p>
          </Left>
        </First>
        <Content>
          <Title>Waste Disposal safe collection</Title>
          <Desc>
            Continental Waste Managers strives to assure the complete safety of
            our customers, our employees and the public in all our operations.
            Please only place approved items in garbage bags, and place the bags
            for safe collection.
          </Desc>
        </Content>
        <Second>
          <Left>
            <h1>Waste Pick up Instruction</h1>
            <p>
              <ol>
                <li>Leave 3 feet between containers</li>
                <li>Handles should face towards your house</li>
                <li>Do not drill into waste bin</li>
                <li>
                  Materials should not be higher than the lid of the container
                  or be placed on top of the lid
                </li>
                <li>Trash should be bagged and tied</li>
                <li>Do not pack materials tightly into trash bag</li>
              </ol>
            </p>
          </Left>
          <Right>
            <img src={garbage} alt="" />
          </Right>
        </Second>
        <StartService />
      </Container>
    </div>
  );
};

export default PickService;

const Second = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 90px;
    margin-bottom: 140px;
    width: 100%;
    height: 60%;
  }
`;

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

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const Right = styled.div`
  width: 50%;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 500;
    margin: 0;
  }
  p {
    /* margin: 60px; */
    width: 70%;
    margin-left: 80px;
    font-size: 18.8px;
    font-weight: 400;
    color: #000000a7;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: 10px;
    }
  }

  li {
    margin: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;

const First = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  /* height: 100vh; */
  color: #00174f;
`;
