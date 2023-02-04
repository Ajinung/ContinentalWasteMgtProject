import React from "react";
import styled from "styled-components";

const StartService = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>
            <h4>start service</h4>
          </Title>
          <Desc>
            <h2>
              Continental Waste Managers offers convenient pickup times and
              reliable service. Recycling is available in many areas where we
              offer garbage pickup.
            </h2>
          </Desc>
          <Button>
            <button>Make inquiries</button>
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default StartService;

// const Wrapper = styled.div``
const Button = styled.div`
  button {
    width: 200px;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: transparent;
    text-shadow: 2px 2px 3px #fff;
    border: 1px solid #00174f;
    border-radius: 2px;
    transition: all 0.2s ease;
    margin-top: 20px;
    color: #00174f;

    :hover {
      cursor: pointer;
      text-decoration: underline;
      background-color: #ffffff5b;
    }
  }
`;

const Desc = styled.div`
  h2 {
    margin: 0;
    font-weight: 400;
    margin: 15px 0px;

    @media screen and (max-width: 425px) {
      font-size: 18px;
    }
  }
`;
const Title = styled.div`
  h4 {
    margin: 0;
    font-weight: 400;
    font-size: 17px;
  }
`;

const Wrapper = styled.div`
  width: 700px;
  padding: 30px;
  margin: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  border-radius: 5px;
  color: #00174f;
  background-color: #fff;

  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */

  @media screen and (max-width: 425px) {
    width: 100%;
    border-radius: 0;
  }
`;
