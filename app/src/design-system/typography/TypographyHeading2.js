import styled from 'styled-components';

export const Heading2 = styled.h1`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  /* 24 px */
  font-size: 1.5rem;
  /* 30 px */
  line-height: 1.25em;
  color: ${(props) => props.theme.color_palette_white};
`;

export default Heading2;
