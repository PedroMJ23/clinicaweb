import React from "react";
import { Link } from "react-router-dom";
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
  position: fixed;
  top: 0;
`

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
const LinksStyle = styled(Link)`
color: white;
text-decoration: none;
list-style: none;
border: none;
`

const Nav = () => {
  return (
    <NavDiv>
      <UlDiv>
        <li>
          <LinksStyle to="/">Home</LinksStyle>
        </li>
        <li>About Us</li>
        <li><LinksStyle to="/appointments">Appointments</LinksStyle></li>
        <li>Contact</li>
        <li><LinksStyle to="/register">Register</LinksStyle></li>
        <li>
          <LinksStyle to="/login">LogIn</LinksStyle>
        </li>
      </UlDiv>
    </NavDiv>
  );
};

export default Nav;
