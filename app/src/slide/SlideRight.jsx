import React from "react";
import {
  Container,
  YearContainer,
  ArticleContainer,
} from "./SlideRight.styles.js";
import { Body, Link2 } from "../design-system/typography/index.js";
import { data } from "@galleria/core";
import { useSelector } from "react-redux";

function SlideRight() {
  const object = useSelector((state) => state.slide.object);

  return (
    <Container>
      <YearContainer>{object.year}</YearContainer>

      <ArticleContainer>
        <Body>{object.description}</Body>
        <a href={object.source} target="_blank" rel="noreferrer">
          <Link2>go source</Link2>
        </a>
      </ArticleContainer>
    </Container>
  );
}

export default SlideRight;
