module.exports = (array) => {
  if (Array.isArray(array)) {
    return array[Math.floor(Math.random()*array.length)];
  } else {
    throw new Error("Using the 'randomArray' function requires an array.");
  }
}