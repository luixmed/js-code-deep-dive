export default function myMap(array, callback) {
  // Input validation
  if (array == null) {
    // catches both null and undefined
    throw new TypeError("Array is null or undefined");
  }
  const newArray = [];
  for (const [index, element] of array.entries()) {
    newArray.push(callback(element, index, array));
  }
  return newArray;
}
