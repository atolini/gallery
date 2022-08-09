import styled from "styled-components"; 
import ResponsiveContainer from "../design-system/ResponsiveContainer.js";

export const Container = styled.div`
  position: fixed; 
  bottom: 0; 
  left: 0;
  width: 100vw; 
  height: 72px; 

  display: flex; 
  flex-flow: column nowrap;
  align-items: flex-start;

  background-color: #FFF;
 
  @media screen and (min-width: 768px) {
    height: 96px;
  }
`;

export const InfoContainer = styled.div`
  ${ResponsiveContainer}
  align-self: center;
  display: flex; 
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  height: 70px; 

  @media screen and (min-width: 768px) {
    height: 94px;
  }
`; 

export const Info = styled.div`
  display: flex; 
  flex-flow: column nowrap;
  gap: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 40px;

  img { 
    height: 24px;
  }
`;

export const Bar = styled.div`
  background-color: #e5e5e5; 
  height: 2px; 
  width: 100%;

  display: flex; 
  flex-flow: column nowrap;
  align-items: flex-start;

  span { 
    height: 2px;
  }
`; 