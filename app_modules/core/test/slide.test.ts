import { store } from "@galleria/core";
import { set_object } from "../features/slideSlice";
import data from "../data/data";
import { manageTheObject } from "../features/timer";

describe("Unit test for function manageTheObject", () => {
  const currentObject = () => store.getState().slide.object;
  test("Should return the first object of the array", () => {
    expect(currentObject()).toBe(null);
  });

  test("Should move to next array position on each call", () => {
    for (let i = 0; i < 14; i++) {
      manageTheObject();
      expect(currentObject()).toEqual(data[i]);
    }
  });

  test("When the current position is 14, it should return the array at the starting position [0]", () => {
    let mock = data[14]; 

    store.dispatch(set_object(mock)); 
    manageTheObject(); 
    expect(currentObject()).toEqual(data[0]);
  });
});
