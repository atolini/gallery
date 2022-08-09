import styled from 'styled-components';

export const Heading3 = styled.h3`
  font-family: ${(props) => props.theme.font_primary};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.color_palette_black};
`;

export default Heading3;
