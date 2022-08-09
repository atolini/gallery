import React from "react";
import { Container, InfoContainer, Info, Buttons, Bar } from "./Player.styles";
import { Heading3, SubHead3 } from "../design-system/typography/index.js";
import { useSelector } from "react-redux";
import iconBack from "../../assets/shared/icon-back-button.svg";
import iconNext from "../../assets/shared/icon-next-button.svg";
import { prevOrNext } from "@galleria/core";

function Player() {
  const value = useSelector((state) => state.slide.value);
  const object = useSelector((state) => state.slide.object);
  const res = 4.73 * value;

  return (
    <Container>
      <Bar>
        <span style={{ width: `${res}%`, backgroundColor: "black" }}></span>
      </Bar>
      <InfoContainer>
        <Info>
          <Heading3>{object.name}</Heading3>
          <SubHead3>{object.artist.name}</SubHead3>
        </Info>
        <Buttons>
          <img src={iconBack} onClick={() => prevOrNext()} />
          <img src={iconNext} onClick={() => prevOrNext(true)} />
        </Buttons>
      </InfoContainer>
    </Container>
  );
}

export default Player;
