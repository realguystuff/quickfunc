module.exports=(a)=>{
  if (Array.isArray(a)) return a.reduce((acc, val) => acc + val, 0) / a.length;
  else throw new Error("Using the 'averageArray' function requires an array.");
}