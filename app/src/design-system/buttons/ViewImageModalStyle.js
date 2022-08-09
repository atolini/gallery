import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap; 
  justify-content: center;
  align-items: center;
  
  position: fixed; 
  left: 0;
  bottom: 0;
  width: 100vw; 
  height: 100vh;
  z-index: 1;
  background-color: rgba(0,0,0,.85);

  @media screen and (max-width: 320px) { 
    width: 320px; 
    padding-left: 4px; 
    padding-right: 4px; 
  }

  @media screen and (min-width: 320px) { 
    width: 100vw;
  }

  @media screen and (min-width: 375px) {  
    padding-left: 24px; 
    padding-right: 24px; 
  }

  @media screen and (min-width: 768px) { 
    padding-left: 50px; 
    padding-right: 50px;
  }

  @media screen and (min-width: 1440px) { 
    padding-left: 0; 
    padding-right: 0;
  }
`;

export const Gallery = styled.div`
  display: flex; 
  flex-flow: column nowrap; 
  align-items: flex-end;
  gap: 40px; 
  
  button { 
    font-family: ${(props) => props.theme.font_primary};
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 3px;
    color: ${(props) => props.theme.color_palette_white};
    text-transform: uppercase;
    border: none; 
    background: none;
  }

  @media screen and (max-width: 320px) { 
    width: 312px; 
  }

  @media screen and (min-width: 320px) { 
    width: auto; 
  }

  img { 
    @media screen and (max-width: 320px) { 
      width: 100%; 
    }

    @media screen and (min-width: 320px) { 
      width: 100%;
    }
  }
`;
