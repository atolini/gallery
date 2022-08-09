import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  html { 
    font-size: 16px;
  }

  body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    overflow-x: hidden;
  }

  a:link {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  hr { 
    border: 1px solid ${(props) => props.theme.color_palette_medium_grey};
    padding: 0;
  }
`;

export default GlobalStyle;
