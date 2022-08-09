import React, { useEffect } from "react";
import Player from "../player/Player.jsx";
import { Container } from "./Slide.styles.js";
import SlideLeft from "./SlideLeft.jsx";
import SlideRight from "./SlideRight.jsx";
import { pauseTimer } from "@galleria/core";
import { useSelector } from "react-redux";

function Slide() {
  const object = useSelector((state) => state.slide.object);

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    pageUp();
  }, []);

  useEffect(() => {
    document.title = `Galleria - ${object.name} - ${object.artist.name}`;
  }, [object]);

  useEffect(() => {
    document.addEventListener("visibilitychange", () => pauseTimer());

    return () => {
      document.addEventListener("visibilitychange", () => pauseTimer());
    };
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
