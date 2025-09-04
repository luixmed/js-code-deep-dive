import myMap from "../myMap.js";

test("myMap is a function", () => {
  expect(typeof myMap).toBe("function");
});

test("myMap returns an array", () => {
  const result = myMap([], () => {});
  expect(Array.isArray(result)).toBe(true);
});
