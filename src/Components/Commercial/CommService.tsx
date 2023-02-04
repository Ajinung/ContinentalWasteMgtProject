import React from "react";
import styled from "styled-components";

const CommService = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Commercial Waste Disposal, Recycling & Trash Services</Title>
          <Desc>
            Continental Waste Managers commercial waste collection provides your
            business with a range of options and service schedules for your
            waste pickup needs.
          </Desc>
          <Thumbnail>
            <Card>
              <Image></Image>
              <Text>Commercial Business Waste Management</Text>
            </Card>
            <Card>
              <Image></Image>
              <Text>Commercial plastic recycling</Text>
            </Card>
            <Card>
              <Image></Image>
              <Text>Commercial Metal Scrap Recycling</Text>
            </Card>
            <Card>
              <Image></Image>
              <Text>Commercial Organic/Food Waste PickUp</Text>
            </Card>
            <Card>
              <Image></Image>
              <Text>Residential Waste PickUp</Text>
            </Card>
            <Card>
              <Image></Image>
              <Text>Residential Waste PickUp</Text>
            </Card>
          </Thumbnail>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CommService;

const Text = styled.h2`
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.3rem;
`;
const Image = styled.div`
  width: 100%;
  height: 80%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const Card = styled.div`
  width: 450px;
  height: 45vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 30px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  width: 950px;
  text-align: center;

  @media screen and (max-width: 769px) {
    width: 100%;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  color: #00174f;
`;
