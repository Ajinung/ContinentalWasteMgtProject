import React from "react";
import styled from "styled-components";

const MainContent = () => {
  return (
    <div>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </div>
  );
};

export default MainContent;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blue; */
`;
const Container = styled.div`
  width: 78.2vw;
  height: 90vh;
  background-color: #ecebeb;
`;
