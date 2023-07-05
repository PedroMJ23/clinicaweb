import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import GalenoImg from '../../assets/SliderImg/galeno.png';
import OspeImg from '../../assets/SliderImg/ospe.png';
import OsdeImg from '../../assets/SliderImg/osde.png';

const DivSliderImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 150px;
width: 200px;
//background-color: red;
//border: black 1px solid;
//padding: 5px;
margin: 5px 20px; 
img{
  width: 100%;
  height: 100%;
  margin: 3px;
}

`



const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...settings}>
      <DivSliderImg>
        <img src={GalenoImg} alt="Imagen 1" />
      </DivSliderImg>
      <DivSliderImg>
        <img src={OspeImg} alt="Imagen 2" />
      </DivSliderImg>
      <DivSliderImg>
        <img src={OsdeImg} alt="Imagen 3" />
      </DivSliderImg>
    </Slider>
  );
};

export default HeroSlider;
