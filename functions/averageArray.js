module.exports = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
  } else {
    throw new Error("Using the 'averageArray' function requires an array.");
  }
}