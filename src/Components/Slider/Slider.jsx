import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from '../../assets/SliderImg/DreamShaper_v5_I_want_a_doctor_attending_to_a_patient_with_a_s_0.jpg'

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImage = styled.img`
  width: 300px;
  height: 250px;
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["image1", "image2.jpg", "image3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 37) {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
      } else if (event.keyCode === 39) {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [images.length]);

  return (
    <SliderContainer>
      <SliderImage src={images[currentSlide]} alt="Slider Image" />
    </SliderContainer>
  );
};

export default Slider;
