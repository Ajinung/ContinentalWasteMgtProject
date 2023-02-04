import React from "react";
import styled from "styled-components";
import { ImOffice } from "react-icons/im";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";

const BillContent = () => {
  return (
    <div>
      <Container>
        <Card>
          <Icon>
            <ImOffice />
          </Icon>
          <Text>
            <h2>Pay at the office</h2>
          </Text>
        </Card>
        <Card>
          <Icon>
            <BsBank2 />
          </Icon>
          <Text>
            <h2>Pay at the bank</h2>
          </Text>
        </Card>
        <Card>
          <Icon>
            <MdOutlineSupervisorAccount />
          </Icon>
          <Text>
            <h2>Pay to supervisor</h2>
          </Text>
        </Card>
      </Container>
    </div>
  );
};

export default BillContent;

const Text = styled.div`
  h2 {
    margin: 0;
    font-weight: 400;
    margin-top: 10px;
  }
`;

const Icon = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const Card = styled.div`
  width: 500px;
  height: 270px;
  margin: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 95%;
  /* height: 50vh; */
  margin: auto;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #00174f;
`;
