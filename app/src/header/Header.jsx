import React from "react";
import Logo from "./ResponsiveLogo.jsx";
import Container from "./HeaderContainer.js";
import { Link1 } from "../design-system/typography/index.js";
import { useSelector } from "react-redux";
import { startTimer, pauseTimer, changeTheMode, turnSlideOn } from "@galleria/core";

function Header() {
  const status = useSelector((state) => state.slide.timer);
  const mode = useSelector((state) => state.slide.view);

  const change = () => {
    if (mode === "slide") {
      turnSlideOn();
      pauseTimer();
    } else {
      changeTheMode(true, 0);
    }
  };

  return (
    <Container>
      <Logo />
      <button>
        <Link1 onClick={change}>
          {status === "off" ? "start slideshow" : "stop slideshow"}
        </Link1>
      </button>
    </Container>
  );
}

export default Header;
