import { jest } from "@jest/globals";
import myMap from "../myMap.js";

test("myMap is a function", () => {
  expect(typeof myMap).toBe("function");
});

test("myMap returns an array", () => {
  const result = myMap([], () => {});
  expect(Array.isArray(result)).toBe(true);
});

test("myMap transforms each element correctly", () => {
  const input = [1, 2, 3];
  const double = (n) => n * 2;
  const result = myMap(input, double);
  expect(result).toEqual([2, 4, 6]);
});

test("the callback receives the element, index, and array arguments", () => {
  const input = ["a", "b", "c"];
  const mockCallback = jest.fn();
  myMap(input, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith("a", 0, input);
  expect(mockCallback).toHaveBeenCalledWith("b", 1, input);
  expect(mockCallback).toHaveBeenCalledWith("c", 2, input);
});

test("throws TypeError if array is null or undefined", () => {
  expect(() => myMap(null, jest.fn())).toThrow(TypeError);
  expect(() => myMap(undefined, jest.fn())).toThrow(TypeError);
});

test("throws TypeError if callback is not a function", () => {
  expect(() => myMap([1, 2, 3], "not a function")).toThrow(TypeError);
});
