import React from 'react';
import styled from 'styled-components';
import Logo from "../../assets/shared/Logo.svg";
import { changeTheMode } from '@galleria/core';
import { useSelector } from "react-redux";

const LogoStyled = styled.img`
  width: 113px; 

  @media screen and (min-width: 1440px) {
    width: 170px;
  }

  &:hover { 
    cursor: pointer; 
  }
`;

function ResponsiveLogo() {
  const mode = useSelector((state) => state.slide.view);

  return <LogoStyled src={Logo} alt="Logo" onClick={() => {
   mode === "slide"? changeTheMode() : null;
  }}/>;
}

export default ResponsiveLogo;
