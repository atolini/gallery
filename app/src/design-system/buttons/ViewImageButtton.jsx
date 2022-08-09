/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import Container from "./ViewImageButtonStyle";
import Icon from "../../../assets/shared/icon-view-image.svg";
import Modal from "./ViewImageModal.jsx";
import { pauseTimer } from "@galleria/core";

function Button({ gallery }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
    pauseTimer();
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
    pauseTimer();
  };

  return (
    <>
      <Container onClick={setModalIsOpenToTrue}>
        <img src={Icon} alt="icon" />
        <span>view image</span>
      </Container>

      {modalIsOpen ? (
        <Modal
          gallery={gallery}
          setModalIsOpenToFalse={setModalIsOpenToFalse}
        />
      ) : null}
    </>
  );
}

export default Button;
