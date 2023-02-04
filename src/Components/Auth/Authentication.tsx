import React from "react";
import styled from "styled-components";
import Register from "./Register";
import SignIn from "./SignIn";

const Authentication = () => {
  return (
    <div>
      <Container>
        <SignIn />
        <Register />
      </Container>
    </div>
  );
};

export default Authentication;

const Container = styled.div`
  margin-top: 50px;
  height: 65vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    margin: 30px;
    height: 100%;
  }
`;
