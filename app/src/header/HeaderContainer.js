import styled from 'styled-components';
import ResponsiveContainer from '../design-system/ResponsiveContainer.js';

const HeaderContainer = styled.header`
  ${ResponsiveContainer}

  display: flex; 
  flex-flow: row nowrap; 
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 320px) {
    padding-top: 24px;
    padding-bottom: 24px; 
  } 
`;

export default HeaderContainer;
