import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import LogoImgImp from "../../assets/SliderImg/DreamShaper_v5_I_want_a_logo_for_a_clinic_or_hospital_it_shoul_0 (copia).jpg";
import NenuImgImp from "../../assets/Menu/menu (1).png";

const LogoYNavDIv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #131415;
  position: relative;
`;
const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 10px;
  top: 10px;
`;

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
  //margin-right: 50px;
  @media only screen and (max-width: 767px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 250px;
    background-color: #131415;
    color: white;
    position: absolute;
    top: 70px;
    right: 0px;
    z-index: 999; /* Ajusta el valor según sea necesario */
    border-radius: 0px 0px 0px 15px;
  }

  li {
    padding: 3px;
    list-style: none;
    color: white;
    border-radius: 3px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    @media only screen and (max-width: 767px) {
      border: none;
    }


    &:hover {
      background-color: grey;
      color: white;
    }
  }
`;
const MenuImg = styled.img`
  visibility: hidden;
  height: 35px;
  width: 35px;
  margin-right: 25px;
  @media only screen and (max-width: 767px) {
    visibility: visible;
  }
`;

const LinksStyle = styled(Link)`
  color: white;
  text-decoration: none;
  list-style: none;
  border: none;
`;

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LogoYNavDIv>
        <NavDiv>
          <div>
            <LogoImg src={LogoImgImp} alt="LOGO" />
          </div>
          <UlDiv isMenuOpen={isMenuOpen}>
            <li>
              <LinksStyle to="/">Home</LinksStyle>
            </li>
            <li>About Us</li>
            <li>
              <LinksStyle to="/appointments">Appointments</LinksStyle>
            </li>
            <li>Contact</li>
            <li>
              <LinksStyle to="/register">Register</LinksStyle>
            </li>
            <li>
              <LinksStyle to="/login">LogIn</LinksStyle>
            </li>
          </UlDiv>
          <div>
            <MenuImg src={NenuImgImp} alt="" onClick={toggleMenu} />
          </div>
        </NavDiv>
      </LogoYNavDIv>
    </>
  );
};

export default Nav;
