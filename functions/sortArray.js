module.exports = (array, reverse) => {
  reverse = reverse ?? null;
  if (Array.isArray(array)) {
    array.sort((a, b) => a - b);
    if (reverse) array.reverse();
    return array;
  } else {
    throw new Error("Using the 'sortArray' function requires an array.");
  }
}