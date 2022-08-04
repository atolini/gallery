import { startTimer, pauseTimer, resetTimer } from "@galleria/core"; 
import data from "../data/data";
import { store } from "@galleria/core";

describe("Testing the timer control functions", () => {
  const updateMode = (): string => store.getState().slide.modeTimer; 
  const updateValue = (): number => store.getState().slide.value; 
  const currentObject = () => store.getState().slide.object;

  jest.useFakeTimers();
  
  test("Start function", () => {
    expect(currentObject()).toBe(null);
    startTimer(); 
    expect(updateMode()).toBe("on");
    expect(currentObject()).toEqual(data[0]); 
  }); 
  
  test("Clock function", () => {
    jest.advanceTimersByTime(5000);
    expect(updateValue()).toBe(5);
    expect(currentObject()).toEqual(data[5]);
  });

  test("Pause function", () => {
    pauseTimer(); 
    jest.advanceTimersByTime(5000); 
    expect(updateValue()).toBe(5); 
    expect(currentObject()).toEqual(data[5]); 
  })

  test("Restart", () => {
    startTimer(); 
    jest.advanceTimersByTime(5000); 
    expect(updateValue()).toBe(10);
    expect(currentObject()).toEqual(data[10]);
  });

  test("Reset function", () => {
    resetTimer(); 
    jest.advanceTimersByTime(1000); 
    expect(updateValue()).toBe(0); 
    expect(updateMode()).toBe("off");
  })
}); 

