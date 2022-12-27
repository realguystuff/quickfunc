module.exports = (value) => {
  if (typeof value !== 'number') {
    throw new Error("Using the 'oddEven' function requires a number.");
  }
  return Math.abs(value) % 2 === 0 ? 'even' : 'odd';
}