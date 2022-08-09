import styled from "styled-components";
import ResponsiveContainer from "../design-system/ResponsiveContainer.js";

export const Container = styled.section`
  ${ResponsiveContainer}
  padding-top: 25px;
  padding-bottom: 25px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
  }
`;
