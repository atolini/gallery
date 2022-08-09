import styled from 'styled-components';

export const Display = styled.h1`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  /* 100 px */
  font-size: 6.25rem;
  /* 150 px  */
  line-height: 0.75em;
  color: ${(props) => props.theme.color_palette_light_grey};

  @media screen and (min-width: 768px) {
    /* 200 px */
    font-size: 12.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 9.1875rem;
    font-size: clamp(9.1875rem, -0.013888888888889284rem + 14.722222222222223vw, 12.5rem);
  }
`;

export default Display;
