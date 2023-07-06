import React from "react";
import { styled } from "styled-components";

const SpecialitiesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  margin: 10px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
    li {
      font-size: 20px;
      background-color: darkblue;
      color: white;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;



const Specialities = () => {
  return (
    <SpecialitiesDiv>
      <h2>Specialities</h2>
      <ul>
        <li>laboratory </li>
        <li>hospitalization</li>
        <li>tomography</li>
        <li>ultrasound</li>
        <li> echocardiography</li>
        <li>cardiology</li>
        <li>surgery</li>
        <li>dentistry</li>
        <li>gastroenterology</li>
      </ul>
    </SpecialitiesDiv>
  );
};

export default Specialities;



