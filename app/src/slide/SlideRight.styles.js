import styled from "styled-components";
import { Display } from "../design-system/typography/index.js"

export const Container = styled.article`
  width: 100%;
`;

export const YearContainer = styled(Display)`
  position: absolute;
  right: 24px;
  z-index: -1;

  @media screen and (min-width: 375px) {
    right: clamp(1.5rem, 0.3072519083969465rem + 5.089058524173028vw, 2.75rem);
  }

  @media screen and (min-width: 768px) {
    left: clamp(
      2.5rem,
      -14.527027027027028rem + 35.472972972972975vw,
      15.625rem
    );
    right: auto;
    padding-top: 64px;
  }

  @media screen and (min-width: 1024px) {
    left: auto;
    right: clamp(0.75rem, -4.583333333333333rem + 8.333333333333332vw, 2.5rem);
    padding-top: 0;
  }

  @media screen and (min-width: 1440px) {
    right: 0;
  }
`;

export const ArticleContainer = styled.div`
  padding-top: 54px;
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 139px;
    padding-left: 114px;
    padding-right: 116px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 30px;
    padding-top: 20.8%;
    padding-right: clamp(
      1.625rem,
      -15.73611111111111rem + 27.77777777777778vw,
      7.875rem
    );
  }
`;
