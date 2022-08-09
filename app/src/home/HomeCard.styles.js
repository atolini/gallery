import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;

  &:hover {
    opacity: 0.5;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 7px;

  width: 80%;
  bottom: 32px;
  left: 10%;
  position: absolute;
`;
