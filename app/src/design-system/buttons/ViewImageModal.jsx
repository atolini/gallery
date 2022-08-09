/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { ModalContainer, Gallery } from './ViewImageModalStyle';

function Modal({ gallery, setModalIsOpenToFalse }) {
  return (
    <ModalContainer>
      <Gallery>
        <RemoveScrollBar />
        <button onClick={() => setModalIsOpenToFalse()}>close</button>
        <img src={gallery} alt="Gallery" />
      </Gallery>
    </ModalContainer>
  );
}

export default Modal;
