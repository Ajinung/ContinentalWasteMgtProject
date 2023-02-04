import React from "react";
import styled from "styled-components";
import MainContent from "./Main.tsx/MainContent";
import SideBar from "./SideBar/SideBar";

const UserDashboard = () => {
  return (
    <div>
      <Container>
        <SideBar />
        <MainContent />
      </Container>
    </div>
  );
};

export default UserDashboard;

const Container = styled.div`
  width: 100%;
  /* height: 90vh; */
  display: flex;
`;
