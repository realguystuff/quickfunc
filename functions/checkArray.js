module.exports=(a,l)=>{
  if (l !== 'array') return a.filter(function(element) { return typeof element === l; });
  else return a.filter(Array.isArray);
}