import styled from "styled-components";
import ResponsiveContainer from "../design-system/ResponsiveContainer.js";

export const Grid = styled.div`
  ${ResponsiveContainer}
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 40px;

  @media (max-width: 1440px) {
    column-gap: 2.94vw;
  }
`;

export const Flexitem = styled.div`
  grid-column: span 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 0 20px 0;

  @media (max-width: 1024px) {
    grid-column: span 6;
  }

  @media (max-width: 650px) {
    grid-column: span 12;
  }
`;
