import React from "react";
import styled from "styled-components";

const BillBanner = () => {
  return (
    <div>
      <Container>
        <Desc>
          <p>Pay my bill</p>
        </Desc>
        <Title>
          <h2>Enjoy seamless payment</h2>
        </Title>
      </Container>
    </div>
  );
};

export default BillBanner;

const Title = styled.div`
  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

const Desc = styled.div`
  p {
    font-weight: 600;
    margin: 0;
    font-size: 25px;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #00174f;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
