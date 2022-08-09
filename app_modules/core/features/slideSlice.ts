import { createSlice } from "@reduxjs/toolkit";
import type { IObject } from "../data/data.types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { data } from "@galleria/core";

export interface ISlideState {
  timer: "on" | "off";
  slide: "on" | "off";
  view: "home" | "slide";
  value: number;
  object: IObject;
}

export interface IGoToSlide {
  timer: "on" | "off";
  slide: "on" | "off";
  object: IObject;
}

const initialState: ISlideState = {
  view: "home",
  timer: "off",
  slide: "off",
  value: 0,
  object: null,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    go_to_home: (state) => {
      state.view = "home";
      state.timer = "off";
      state.value = 0;
      state.object = null;
    },
    go_to_slide: (state, action: PayloadAction<IGoToSlide>) => {
      state.view = "slide";
      state.timer = action.payload.timer;
      state.value = 0;
      state.object = action.payload.object;
      state.slide = action.payload.slide;
    },
    change_the_object: (state) => {
      if (!state.object || state.object.id === 14) {
        state.object = data[0];
      } else {
        state.object = data[state.object.id + 1];
      }
    },
    previous_the_object: (state) => {
      if (!state.object) {
        state.object = data[0];
      }
      if (state.object.id === 0) {
        state.object = data[14];
      } else {
        state.object = data[state.object.id - 1];
      }
    },
    value_increment: (state) => {
      state.value++;
    },
    timer_turn_off: (state) => {
      state.timer = "off";
    },
    timer_turn_on: (state) => {
      state.timer = "on";
    },
    clear_the_timer: (state) => {
      state.value = 0;
    },
    turn_slidemode_on: (state) => {
      state.slide = "on";
    },
  },
});

export const {
  go_to_home,
  go_to_slide,
  value_increment,
  timer_turn_off,
  turn_slidemode_on,
  timer_turn_on,
  previous_the_object,
  clear_the_timer,
  change_the_object,
} = slideSlice.actions;
export default slideSlice.reducer;
