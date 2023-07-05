import React from "react";
import { styled } from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  background-color: #373c42;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div></div>
      <h2>Footer</h2>
      <div></div>
    </FooterStyle>
  );
};

export default Footer;
