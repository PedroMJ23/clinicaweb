import React from "react";
import { styled } from "styled-components";
import ClinicalImg from "../../assets/SliderImg/clinic.jpg";
import HeroSlider from "../Slider/SliderWithSlick";
import Specialities from "../Specialities/Specialities";
import { Link } from "react-router-dom";

const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 20px;
  margin: 90px 40px 15px 40px;
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 40px;
  }
  img {
    height: 450px;
    width: 350px;
    border-radius: 8px;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
`;
const WelcomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 15px;
  margin: 10px;
`;
const SysApBtn = styled.button`
  height: 30px;
  width: 350px;
  background-color: darkblue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const HeroSpan = styled.span`
  width: 80%;
  height: 3px;
  background-color: black;
`;
const LinksStyle = styled(Link)`
color: white;
text-decoration: none;
list-style: none;
border: none;
`

const Hero = () => {
  return (
    <>
      <HeroDiv>
        <WelcomeDiv>
          <h1>Welcome!</h1>
          <HeroSpan></HeroSpan>
          <h2>Online Appointment Booking System </h2>
          <p>
            We recommend using the web system to schedule, check, and cancel
            appointments.
          </p>
          <SysApBtn ><LinksStyle to="/appointments">System Appointment </LinksStyle> </SysApBtn>
        </WelcomeDiv>
        <div>
          <img src={ClinicalImg} alt="imagenDeClinica" />
        </div>
      </HeroDiv>
      <h2>Trabajamos con grandes obras sociales:</h2>

      <HeroSlider />
      <Specialities />
    </>
  );
};

export default Hero;
