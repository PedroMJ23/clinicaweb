import React from "react";
import { styled } from "styled-components";
import ClinicalImg from "../../assets/SliderImg/clinic.jpg";
import HeroSlider from "../Slider/SliderWithSlick";
import Specialities from "../Specialities/Specialities";

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
`


const Hero = () => {
  return (
    <>
      <HeroDiv>
        <WelcomeDiv>
          <h1>Welcome</h1>
          <span>
            ---------------------------------------------------------------
          </span>
          <h2>Online Appointment Booking System </h2>
          <p>
            We recommend using the web system to schedule, check, and cancel
            appointments.
          </p>
          <SysApBtn>System Appointment</SysApBtn>
        </WelcomeDiv>
        <div>
          <img src={ClinicalImg} alt="imagenDeClinica" />
        </div>
      </HeroDiv>
      <h2>Trabajamos con grandes obras sociales:</h2>

      <HeroSlider />
      <Specialities/>
    </>
  );
};

export default Hero;
