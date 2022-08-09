import React from "react";
import { Heading2, SubHead2 } from "../design-system/typography/index.js";
import { Container, Image, Title } from "./HomeCard.styles.js";

function Card({ src, name, artist, id }) {
  return (
    <Container>
      <Image src={src} />
      <Title>
        <Heading2>{name}</Heading2>
        <SubHead2>{artist}</SubHead2>
      </Title>
    </Container>
  );
}

export default Card;
