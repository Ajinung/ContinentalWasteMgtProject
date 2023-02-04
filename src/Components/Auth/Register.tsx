import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const navigate = useNavigate();

  const register = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/register", {
        email,
        Password,
        fullName,
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/userdashboard");
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div>
      <Container>
        <Wrapper onSubmit={register}>
          <h1>new user</h1>
          <InputHolder>
            <p>Enter fullname</p>
            <input
              type="text"
              required
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </InputHolder>
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

          <button type="submit">create account</button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;

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
    width: 230px;
    transition: all 0.2s ease;
  }
`;

const Container = styled.div`
  width: 650px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
