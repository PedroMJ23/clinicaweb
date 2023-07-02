import React from "react";
import { styled } from "styled-components";

const NavDiv = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  height: 70px;
  background-color: #131415;
  color: white;
`;

const UlDiv = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  height: 90px;
  background-color: veige;
  gap: 15px;
  margin-right: 50px;

  li {
    padding: 3px;
    list-style: none;
    color: white;
    border-radius: 3px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: grey;
      color: white;
    }
  }
`;

const Nav = () => {
  return (
    <NavDiv>
      <UlDiv>
        <li>Home</li>
        <li>About Us</li>
        <li>Appointments</li>
        <li>Contact</li>
        <li>Register</li>
        <li>LogIn</li>
      </UlDiv>
    </NavDiv>
  );
};

export default Nav;
