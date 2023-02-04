import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Navigation>
          <Menu>
            {show ? (
              <MdOutlineClose onClick={toggle} />
            ) : (
              <MdMenu onClick={toggle} />
            )}
          </Menu>
          <Logo to="/">
            <h1>Continental</h1>
          </Logo>

          <Links>
            <Nav to="/residential">Residential</Nav>
            <Nav to="/commercial">Commercial</Nav>
            <Nav to="/pick-up">Pick up</Nav>
            <Nav to="/recycle">Recycle</Nav>
            <Nav to="/contact">CUSTOMER SUPPORT</Nav>
          </Links>

          <Bill to="/auth">
            <FaSignInAlt />
          </Bill>

          {show ? (
            <MobileMenu>
              <Links2>
                <NavLink
                  to="/residential"
                  style={{ textDecoration: "none", color: "#00174F" }}
                >
                  <h3>Residential</h3>
                </NavLink>
                <NavLink
                  to="/commercial"
                  style={{ textDecoration: "none", color: "#00174F" }}
                >
                  <h3>Commercial</h3>
                </NavLink>
                <NavLink
                  to="/pick-up"
                  style={{ textDecoration: "none", color: "#00174F" }}
                >
                  <h3>Pick up</h3>
                </NavLink>
                <NavLink
                  to="/recycle"
                  style={{ textDecoration: "none", color: "#00174F" }}
                >
                  <h3>Recycle</h3>
                </NavLink>
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "#00174F" }}
                >
                  <h3>customer service</h3>
                </NavLink>
              </Links2>
            </MobileMenu>
          ) : null}
        </Navigation>
      </Container>
    </div>
  );
};

export default Header;

const Nav = styled(NavLink)`
  padding: 13px;
  padding-left: 30px;
  text-decoration: none;
  color: #00174f;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-size: 15px;
  font-weight: bolder;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    color: #f32428;
    text-decoration: underline;
  }
`;

const Links2 = styled.div`
  /* display: flex;
  flex-wrap: wrap; */

  h3 {
    font-size: 16px;
    padding: 13px;
    padding-left: 30px;

    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 17px;
    font-weight: bolder;
    transition: all 0.3s ease;

    :hover {
      cursor: pointer;
      color: #f32428;
      text-decoration: underline;
    }
  }
`;

const MobileMenu = styled.div`
  width: 350px;
  height: 92vh;
  z-index: 1;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 56px;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const Menu = styled.div`
  display: none;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 30px;
    font-size: 30px;
    color: #00174f;
  }
`;
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

  h3 {
    font-size: 16px;
    padding: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 14px;
    font-weight: 900;
    transition: all 0.3s ease;

    :hover {
      cursor: pointer;
      color: #f32428;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Bill = styled(NavLink)`
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  margin-right: 40px;
  color: #00174f;

  @media screen and (max-width: 768px) {
    margin-right: 30px;
  }

  :hover {
    cursor: pointer;
    /* text-decoration: underline;
    color: #f72b2c; */
  }
`;
const Logo = styled(NavLink)`
  margin-left: 40px;
  text-decoration: none;
  color: #00174f;

  h1 {
    margin: 0;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
  }
`;
const Navigation = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #fff;
  color: #00174f;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 2;

  ::selection {
    background: #b3d4fc;
  }

  @media screen and (max-width: 768px) {
    height: 10vh;
    background-color: #fff;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #00174f;
  position: relative;

  @media screen and (max-width: 768px) {
    /* height: 5vh; */
  }
`;
