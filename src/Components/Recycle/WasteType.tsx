import React from "react";
import styled from "styled-components";
import plasticwaste from "../../Assets/plasticwaste.jpg";

const WasteType = () => {
  return (
    <div>
      <Container>
        <ThumbWrapper>
          <Image>
            <img src={plasticwaste} alt="" />
          </Image>
          <p>Plastic</p>
        </ThumbWrapper>
        <ThumbWrapper>
          <Image>
            <img src={plasticwaste} alt="" />
          </Image>
          <p>Paper</p>
        </ThumbWrapper>
        <ThumbWrapper>
          <Image>
            <img src={plasticwaste} alt="" />
          </Image>
          <p>Metal</p>
        </ThumbWrapper>
        <ThumbWrapper>
          <Image>
            <img src={plasticwaste} alt="" />
          </Image>
          <p>Plastic</p>
        </ThumbWrapper>
      </Container>
    </div>
  );
};

export default WasteType;

const ThumbWrapper = styled.div`
  p {
    margin: 0;
    text-align: center;
    font-size: 20px;
    color: #00174f;
  }
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  background-color: purple;
  margin: 30px;
  border-radius: 100%;
  border: 3px solid #020024;

  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #c9142c1d;
  }

  @media screen and (max-width: 768px) {
    width: 110px;
    height: 110px;
    margin: 25px;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;
