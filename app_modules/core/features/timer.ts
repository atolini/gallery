import { store } from "@galleria/core";
import data from "../data/data";
import { IObject } from "../data/data.types";
import {
  slide_increment,
  slide_reset,
  slide_turn_on,
  slide_turn_off,
  set_object,
} from "./slideSlice";

let interval: any;

//inicia o timer
function startTimer() {
  let value: number = store.getState().slide.value;
  if (value === 0) {
    store.dispatch(slide_turn_on());
    manageTheObject();
    interval = setInterval(clock, 1000);
  } else {
    store.dispatch(slide_turn_on());
    interval = setInterval(clock, 1000);
  }
}

//zera o timer
function resetTimer() {
  clearInterval(interval);
  store.dispatch(slide_reset());
}

//pausa o timer
function pauseTimer() {
  clearInterval(interval);
  store.dispatch(slide_turn_off());
}

//função que controla que o tempo (máx 20seg) e reinicia a contagem
function clock() {
  let value: number = store.getState().slide.value;

  if (value > 20) {
    resetTimer();
  } else {
    store.dispatch(slide_increment());
    manageTheObject();
  }
}

//função que altera o objeto
function manageTheObject() {
  let current: IObject = store.getState().slide.object;

  if (!current || current.id === 14) {
    store.dispatch(set_object(data[0]));
  } else {
    store.dispatch(set_object(data[current.id + 1]));
  }
}

export { startTimer, resetTimer, pauseTimer, manageTheObject };
