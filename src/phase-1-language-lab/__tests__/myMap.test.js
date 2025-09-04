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
