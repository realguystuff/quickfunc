module.exports = (array) => {
  if (Array.isArray(array)) {
    return array.reverse();
  } else {
    throw new Error("Using the 'reverseArray' function requires an array.");
  }
}