import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const login = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/signin", { Email, Password })
      .then((res) => {
        Swal.fire({
          title: `login successful`,
          timer: 500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            navigate("/userdashboard");
          },
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "seems you type in a wrong username or password!",
        });
      });
  };

  return (
    <div>
      <Container>
        <Wrapper onSubmit={login}>
          <h1>returning user</h1>
          <InputHolder>
            <p>Email Address</p>
            <input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputHolder>
          <InputHolder>
            <p>Enter password</p>
            <input
              type="password"
              required
              minLength={6}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputHolder>
          <button type="submit">sign in</button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignIn;

const InputHolder = styled.div`
  p {
    text-transform: uppercase;
    margin: 0;
    margin-top: 20px;
    color: #292929;
    font-size: 0.8462rem;
    font-weight: 500;
  }

  input {
    width: 330px;
    border: 1px solid #a2a9b3;
    border-radius: 2px;
    margin-left: 0;
    padding: 0 10px;
    height: 38px;
    font-size: 15px;
    color: #555;
  }
`;

const Wrapper = styled.form`
  h1 {
    text-transform: uppercase;
    font-size: 20px;
    color: #00174f;
    margin: 0 0 10px;
    letter-spacing: 1.5px;
    font-weight: 900;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #00174f;
    font-weight: 600;
    color: #fff !important;
    border: none;
    cursor: pointer;
    font-size: 16px !important;
    line-height: 23px;
    text-align: center;
    text-decoration: none !important;
    text-transform: uppercase !important;
    width: 180px;
    transition: all 0.2s ease;
  }
`;

const Container = styled.div`
  width: 650px;
  height: 50vh;
  /* background-color: red; */
  border-right: 2px solid #00174f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
