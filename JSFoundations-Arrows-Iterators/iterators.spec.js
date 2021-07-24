/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import { logger, toCelsius, hottestDays, logHottestDays } from "./iterators";

describe("logger()", () => {
  test("should log every element in the array", () => {
    const spy = jest.spyOn(console, "log");
    logger([1, 2, 3, 4, 5]);
    expect(spy).toHaveBeenCalledTimes(5);
    spy.mockRestore();
  });

  test("should use .forEach", () => {
    const spy = jest.spyOn(Array.prototype, "forEach");
    logger([1, 2, 3, 4, 5]);
    expect(spy.mock.calls.length).toBe(1);
    spy.mockRestore();
  });
});

describe("toCelsius()", () => {
  test("should convert temperatures from F to C", () => {
    let c = [0, 100, -40, 50, 12.5];
    let f = [32, 212, -40, 122, 54.5];
    let results = toCelsius(f);
    expect(results).toEqual(c);
  });

  test("should use .map", () => {
    const spy = jest.spyOn(Array.prototype, "map");
    toCelsius([1, 2, 3, 4, 5]);
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});

describe("hottestDays()", () => {
  test("should return an array of temperatures exceeding a specific threshold", () => {
    let temperatures = [0, -5, 35, 20, 45, 50, 10];
    let threshold = 30;
    let expected = [35, 45, 50];
    let result = hottestDays(temperatures, threshold);
    expect(result).toEqual(expected);
  });

  test("should use .filter", () => {
    const spy = jest.spyOn(Array.prototype, "filter");
    hottestDays([1, 2, 3, 4, 5], 0);
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});

describe("logHottestDays()", () => {
  test("should log temperatures exceeding a specific threshold", () => {
    let temperatures = [32, 212, -40, 122, 54.5];
    let threshold = 30;
    const spy = jest.spyOn(console, "log");
    logHottestDays(temperatures, threshold);
    expect(spy).toHaveBeenCalledTimes(4);
    spy.mockRestore();
  });

  test("should log temperatures in Celsius", () => {
    let temperatures = [32];
    let threshold = 30;
    const spy = jest.spyOn(console, "log");
    logHottestDays(temperatures, threshold);
    expect(spy.mock.calls[0][0]).toBe(0);
    spy.mockRestore();
  });
});
