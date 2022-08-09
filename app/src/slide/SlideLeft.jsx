import React from "react";
import {
  Container,
  HeroImageContainer,
  ArtworkInfoContainer,
  ArtworkCard,
  ArtistPic
} from "./SlideLeft.styles.js";
import { Heading1, SubHead1 } from "../design-system/typography/index.js";
import ViewImageButton from "../design-system/buttons/ViewImageButtton.jsx";
import { data } from "@galleria/core";
import { useSelector } from "react-redux";
///container do slide left, deve buscar os dados no redux e passar por props.
///alguns dados serão usados no styled-components

function SlideLeft() {
  const object = useSelector((state) => state.slide.object);
  
  return (
    <Container>
      <HeroImageContainer heroSmall={object.images.hero.small} heroLarge={object.images.hero.large}>
        <ViewImageButton gallery={object.images.gallery} />
      </HeroImageContainer>

      <ArtworkInfoContainer>
        <ArtworkCard>
          <Heading1>{object.name}</Heading1>
          <SubHead1>{object.artist.name}</SubHead1>
        </ArtworkCard>
        
        <ArtistPic artistImage={object.artist.image} />
      </ArtworkInfoContainer>
    </Container>
  );
}

export default SlideLeft;
