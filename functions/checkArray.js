module.exports = (array, look) => {
  // there is no such thing as 'array' in `typeof`, as arrays are classified as 'object'.
  if (look !== 'array') return array.filter(function(element) { return typeof element === look; });
  else return array.filter(Array.isArray);
}