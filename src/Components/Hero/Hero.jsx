import React from "react";
import { styled } from "styled-components";
import ClinicalImg from '../../assets/SliderImg/clinic.jpg';


const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 20px;
  margin: 15px 40px;
  h1 {
    font-size: 50px;
  }
  img {
    height: 450px;
    width: 350px;
    border-radius: 8px;
    
  }
`;
const Hero = () => {
  return (
    <HeroDiv>
      <div>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dignissimos reprehenderit molestiae debitis. Voluptate, provident
          pariatur impedit asperiores vitae sit iste! Quis, magni? Labore,
          perferendis! Quis perferendis officia dolores corporis! Animi minima
          provident dolorem explicabo fuga repellendus, aliquid libero! Maxime
          fugiat minus cupiditate cum, quos dicta inventore totam eaque debitis,
          perspiciatis earum quis similique amet sapiente aperiam fuga nulla?
          Eos! Cumque sequi quisquam assumenda at magnam sint? Illum quas rerum
          consequuntur sunt reiciendis dolor. Sunt, quasi! Incidunt est alias
          consectetur magnam? Dolore nobis non enim officiis rem, explicabo
          nostrum fugiat? Nesciunt assumenda sunt voluptas maiores. Nemo
          mollitia non enim possimus ab incidunt tempore velit, quam minus
          quidem, asperiores nisi cum quod, rem autem voluptate a nesciunt?
          Distinctio quasi ab voluptatibus? Temporibus aperiam corporis a,
          eveniet atque dolore quam inventore. Esse tempora placeat nesciunt
          error, amet debitis! Iusto fuga, iure necessitatibus eos, sint, illum
          nostrum sit magni neque sed quos animi.
        </p>
      </div>
      <div>
        <img src={ClinicalImg} alt="imagenDeClinica" />
      </div>
    </HeroDiv>
  );
};

export default Hero;
