import React from "react";
import styled from "styled-components";
import garbage from "../../Assets/Wastejunk.jpg";
import wasteman from "../../Assets/wasteman.jpg";

interface twoCardData {
  image: string;
  title: string;
  description: string;
  list: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  list5: string;
}

const TwoCards: React.FC<twoCardData> = ({
  image,
  title,
  description,
  list,
  list1,
  list2,
  list3,
  list4,
  list5,
}) => {
  return (
    <div>
      <Container>
        <First>
          <Right>
            <img src={image} alt="" />
          </Right>
          <Left>
            <h1>{title}</h1>
            <p>{description}</p>
            <Text>
              <ol>
                <li>{list}</li>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
                <li>{list5}</li>
              </ol>
            </Text>
          </Left>
        </First>
      </Container>
    </div>
  );
};

export default TwoCards;

const Text = styled.p``;

const Container = styled.div`
  width: 95%;
  margin: auto;
  /* height: 100vh; */
  color: #00174f;
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
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 100;
    color: #00000096;
  }

  li {
    margin: 10px;
  }
`;

const First = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
