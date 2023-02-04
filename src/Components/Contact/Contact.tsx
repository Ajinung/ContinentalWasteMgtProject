import React from "react";
import styled from "styled-components";
import bg from "../../Assets/contactbg.avif";
import line from "../../Assets/line.svg";

const Contact = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Right>
            <Text>
              <Title>Contact Us</Title>
              <Desc>
                <p>
                  Have questions about Continental Waste Managers? Please give
                  us a call or email the address below.
                </p>
                <br />

                <p>
                  Office line:
                  <a href="tel:+234 90-733-7788">+234 90-733-7788</a>{" "}
                </p>
                <p>
                  Email: {""}
                  <a href="mailto:hello@continental.com">
                    hello@continental.com
                  </a>{" "}
                </p>
              </Desc>
            </Text>
          </Right>
          <Left>
            <img src={line} alt="" />
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Contact;

const Border = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #00174f;
`;

const Text = styled.div`
  margin: 30px;
`;

const Desc = styled.div`
  p {
    width: 450px;

    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 1.3rem;
      margin-top: 15px;
    }
  }

  a {
    color: #000;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 60px;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const Left = styled.div`
  width: 790px;
  height: 90vh;
  background-color: orangered;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotate(180deg);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 790px;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    /* font-size: 1.5rem;
    margin-top: 15px; */
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  /* height: 90vh; */
`;
