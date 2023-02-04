import React from "react";
import styled from "styled-components";

const Footer = () => {
  const date = new Date();

  return (
    <div>
      <Container>
        <p>© {date.getFullYear()} Continental Waste Managers.</p>
      </Container>
      <Developer>
        <p>
          {" "}
          Developed by <a href="mailto:isaacetor7@gmail.com">Isaac Etor</a>
        </p>
      </Developer>
    </div>
  );
};

export default Footer;

const Developer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #707070;

  p {
    margin-left: 50px;
    font-weight: 300;
  }

  a {
    /* text-decoration: none; */
    color: #707070;
  }
`;

const Container = styled.div`
  /* height: 10vh; */
  background-color: #00174f;
  /* margin-top: 10px; */
  display: flex;
  align-items: center;
  color: #fff;

  p {
    margin-left: 50px;
    font-weight: 600;
    padding: 10px 0px;
  }
`;
