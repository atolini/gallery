import { store } from "@galleria/core";
import data from "../data/data";
import { IObject } from "../data/data.types";
import {
  value_increment,
  clear_the_timer,
  timer_turn_on,
  timer_turn_off,
  previous_the_object,
  go_to_slide,
  turn_slidemode_on,
  go_to_home,
  change_the_object,
} from "./slideSlice";

let interval: any = null;

//inicia o timer
const startTimer = () => {
  interval = setInterval(clock, 1000);
};

//limpa a var interval e zera o estado "value"
const resetTimer = () => {
  clearInterval(interval);
  store.dispatch(clear_the_timer());
};

//função que controla que o tempo (máx 20seg) e reinicia a contagem
const clock = () => {
  let value: number = store.getState().slide.value;

  if (value > 20) {
    resetTimer();
    store.dispatch(change_the_object());
    startTimer();
  } else {
    store.dispatch(value_increment());
  }
};

//funções usadas na UI.

//muda o modo da app home ou slide
const changeTheMode = (slide_param: boolean = false, object_id: number = 0) => {
  let mode = store.getState().slide.view;

  if (mode === "slide") {
    store.dispatch(go_to_home());
    clearInterval(interval);
  } else {
    store.dispatch(
      go_to_slide({
        timer: slide_param ? "on" : "off",
        object: data[object_id],
        slide: slide_param ? "on" : "off",
      })
    );
    slide_param ? startTimer() : null;
  }
};

//pausa o timer
const pauseTimer = () => {
  let timer = store.getState().slide.timer;
  let slide = store.getState().slide.slide;

  if (slide === "on") {
    if (timer === "on") {
      clearInterval(interval);
      store.dispatch(timer_turn_off());
      store.dispatch(turn_slidemode_on());
    }
    if (timer === "off") {
      interval = setInterval(clock, 1000);
      store.dispatch(timer_turn_on());
    }
  }
};

// liga o modo slide
const turnSlideOn = () => {
  store.dispatch(turn_slidemode_on());
};

//next object
const prevOrNext = (prev: boolean = false) => {
  let timer = store.getState().slide.timer;

  prev === true
    ? store.dispatch(change_the_object())
    : store.dispatch(previous_the_object());

  if (timer === "on") {
    resetTimer();
    startTimer();
  } else {
    resetTimer();
  }
};

export { pauseTimer, changeTheMode, turnSlideOn, prevOrNext };
