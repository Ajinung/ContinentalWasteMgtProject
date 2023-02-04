import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu, MdMessage } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";

const SideBar: React.FC = () => {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <Container>
          <Wrapper>
            <Menu>
              <p>
                <MdMenu onClick={toggleNav} />
              </p>
            </Menu>

            <Menu2>
              <p>
                <TbCurrencyNaira />
              </p>
              <span>Make Payments</span>
            </Menu2>
            <Menu2>
              <p>
                <BiCalendar />
              </p>
              <span>View Pick-up Schedule</span>
            </Menu2>
            <Menu2>
              <p>
                <MdMessage />
              </p>
              <span>Message Admin</span>
            </Menu2>
          </Wrapper>
        </Container>
      ) : (
        <Menu>
          <p>
            <MdMenu onClick={toggleNav} />
          </p>
        </Menu>
      )}
    </div>
  );
};

export default SideBar;

const Menu2 = styled.div`
  width: 100%;
  height: 8vh;
  /* background:  */
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #292827;
  font-size: 15px;
  transition: all 0.2s;
  p {
    margin-left: 30px;
    padding-right: 15px;
    font-size: 20px;
    margin-bottom: 17px;
  }

  :hover {
    cursor: pointer;
    background-color: #00164ff5;
    color: #fff;
  }
`;

const Menu = styled.div`
  width: 100%;
  height: 8vh;
  margin-top: 40px;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    margin-left: 30px;
    font-size: 30px;
    color: #292827;

    :hover {
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  /* background-color: blue; */
`;

const Container = styled.div`
  width: 20vw;
  height: 90vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
