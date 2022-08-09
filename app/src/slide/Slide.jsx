import React, { useEffect } from "react";
import Player from "../player/Player.jsx";
import { Container } from "./Slide.styles.js";
import SlideLeft from "./SlideLeft.jsx";
import SlideRight from "./SlideRight.jsx";

function Slide() {
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    pageUp();
  }, []); 
  
  return (
    <>
      <Container>
        <SlideLeft />
        <SlideRight />
        <Player />
      </Container>
    </>
  );
}
export default Slide;
