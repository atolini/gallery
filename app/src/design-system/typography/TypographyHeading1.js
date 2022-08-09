import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  /* 24 px */
  font-size: 1.5rem;
  /* 64 px  */
  line-height: 1.1429em;
  color: ${(props) => props.theme.color_palette_black};

  @media (min-width: 768px) {
    /* 56 px */
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1210px) {
    font-size: 3.5rem;
  }
`;

export default Heading1;
