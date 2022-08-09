import styled from 'styled-components';

export const SubHead2 = styled.p`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 400;
  /* 13 px */
  font-size: 0.8125rem;
  /* 16 px */
  line-height: 1.2308em;
  color: ${(props) => props.theme.color_palette_white};
`;

export default SubHead2;
