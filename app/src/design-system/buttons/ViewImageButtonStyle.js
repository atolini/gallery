import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.color_palette_black};
  &:hover { 
    background-color: rgba(255, 255, 255, 0.25);
  }

  width: 154px;
  height: 40px;
  display: flex; 
  flex-flow: row nowrap; 
  justify-content: space-between;
  align-items: center;
  padding-left: 16px; 
  padding-right: 16px; 
  padding-top: 14px; 
  padding-bottom: 14px; 
  gap: 14px;

  img { 
    widht: 12px; 
    height: 12px;
  }

  span { 
    font-family: ${(props) => props.theme.font_primary}; 
    font-size: 10px; 
    font-weight: 700;
    text-transform: uppercase;
    line-height: 12px;
    letter-spacing: 2.15px;
    color: ${(props) => props.theme.color_palette_white};
  }
`;

export default Button;
