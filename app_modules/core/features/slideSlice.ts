import { createSlice } from "@reduxjs/toolkit";
import type { IObject } from "../data/data.types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISlideState {
  modeTimer: "on" | "off";
  modeView: "home" | "slide";
  value: number;
  object: IObject;
}

const initialState: ISlideState = {
  modeView: "home",
  modeTimer: "off",
  value: 0,
  object: null,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    slide_increment: (state) => {
      state.value++;
    },
    slide_turn_off: (state) => {
      state.modeTimer = "off";
    },
    slide_turn_on: (state) => {
      state.modeTimer = "on";
    },
    slide_reset: (state) => {
      state.modeTimer = "off";
      state.value = 0;
    },
    set_object: (state, action: PayloadAction<IObject>) => {
      state.object = action.payload;
    },
  },
});

export const {
  slide_increment,
  slide_turn_off,
  slide_turn_on,
  slide_reset,
  set_object,
} = slideSlice.actions;
export default slideSlice.reducer;
