import styled from 'styled-components';

export const Body = styled.p`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  /* 14 px */
  font-size: 0.875rem;
  /* 28 px */
  line-height: 2em;
  color: ${(props) => props.theme.color_palette_dark_grey};
`;

export default Body;
