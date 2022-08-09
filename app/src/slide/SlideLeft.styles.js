import styled from "styled-components";

export const Container = styled.aside`
  position: relative;
  height: 398px;

  @media screen and (min-width: 768px) {
    height: 560px;
  }
`;

export const HeroImageContainer = styled.div`
  background: lightblue;
  position: absolute;
  top: 0;
  width: 327px;
  height: 280px;
  background-image: url(${(props) => props.heroSmall});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 16px;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
    height: clamp(17.5rem, 15.114503816793892rem + 10.178117048346056vw, 20rem);
  }

  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.heroLarge});
    width: 475px;
    height: 560px;

    display: flex;
    flex-flow: column-reverse nowrap;
  }
`;

export const ArtworkInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 280px;

  display: flex; 
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 0;

  @media screen and (min-width: 768px) {
    width: 445px;
    bottom: auto; 
    right: 0;
  }

  @media screen and (min-width: 1024px) { 
    width: 325px;
  }

  @media screen and (min-width: 1210px) {
    width: 445px;
  }

  @media screen and (min-width: 1440px) { 
    height: 624px;
    justify-content: space-between
  }
`;

export const ArtworkCard = styled.div`
  width: 280px; 
  padding: 24px;
  
  display: flex; 
  flex-flow: column nowrap;
  justify-content: space-between; 
  gap: 8px;
  background-color: ${(props) => props.theme.color_palette_white};

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 24px;
    padding-left: 65px; 
    padding-top: 4px; 
    padding-bottom: 67px; 
    padding-right: auto;
  }
`;

export const ArtistPic = styled.div`
  width: 64px; 
  height: 64px; 
  margin-left: 16px;
  background-color: lightgrey;
  background-image: url(${props => props.artistImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) { 
    margin-left: auto; 
    margin-right: 55px;
    width: 128px; 
    height: 128px; 
  }

  @media screen and (min-width: 1024px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 1210px) {
    margin-right: 55px;
  }

  @media screen and (min-width: 1440px) { 
    margin-right: 222px;
  } 
`;
