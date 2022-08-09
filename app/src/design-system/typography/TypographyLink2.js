import styled from 'styled-components';

export const Link2 = styled.p`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  /* 9 px */
  font-size: 0.5625rem;
  /* 11 px */
  line-height: 1.2223em;
  letter-spacing: 1.92857px;
  text-decoration-line: underline;
  color: ${(props) => props.theme.color_palette_dark_grey};
  text-transform: uppercase;
`;

export default Link2;
