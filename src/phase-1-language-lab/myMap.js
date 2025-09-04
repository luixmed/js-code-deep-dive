export default function myMap(array, callback) {
  const newArray = [];
  for (const [index, element] of array.entries()) {
    newArray.push(callback(element, index, array));
  }
  return newArray;
}
