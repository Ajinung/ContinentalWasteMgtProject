import React from "react";
import styled from "styled-components";

interface PropData {
  title: string;
  desc: string;
  bg: string;
}

const SlideProp: React.FC<PropData> = ({ title, desc, bg }) => {
  return (
    <div>
      <Container bg={bg}>
        <Card>
          <Title>
            <h1>{title}</h1>
          </Title>
          <Desc>
            <p>{desc}</p>
          </Desc>
          <Button>Make inquiries</Button>
        </Card>
      </Container>
    </div>
  );
};

export default SlideProp;

const Button = styled.button`
  width: 200px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  text-shadow: 2px 2px 3px #fff;
  border: 1px solid #000;
  border-radius: 2px;
  transition: all 0.2s ease;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: #ffffff5b;
  }
`;

const Desc = styled.div`
  p {
    width: 450px;
    font-size: 18px;
    text-shadow: 2px 2px 3px #fff;
    font-weight: 400;
    text-transform: capitalize;

    @media screen and (max-width: 425px) {
      font-size: 16px;
      width: 230px;
    }
  }
`;

const Title = styled.div`
  color: #000;
  font-size: 20px;
  line-height: 44px;
  h1 {
    margin: 0;
    text-shadow: 1px 2px 3px #fff;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`;

const Card = styled.div`
  padding: 25px;
  margin: 50px;
  background-color: #ffffffee;
  margin-left: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  backdrop-filter: blur(1.1px);
  -webkit-backdrop-filter: blur(1.1px);

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 90vh;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 36%,
      rgba(255, 255, 255, 0.16290266106442575) 54%,
      rgba(0, 23, 79, 0.3785889355742297) 100%
    );
    position: absolute;
  }
`;
