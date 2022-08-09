import styled from 'styled-components';

export const Link1 = styled.p`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  /* 9 px */
  font-size: 0.5625rem;
  /* 15 px */
  line-height: 1.25em;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color_palette_dark_grey};

  @media (min-width: 768px) {
    /* 12 px */
    font-size: 0.75rem;
  }


`;

export default Link1;
