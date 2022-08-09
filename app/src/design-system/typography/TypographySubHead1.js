import styled from 'styled-components';

export const SubHead1 = styled.h1`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 400;
  /* 15 px  */
  font-size: 0.9375rem;
  /* 19 px */
  line-height: 1.27em;
  color: ${(props) => props.theme.color_palette_dark_grey};
`;

export default SubHead1;
