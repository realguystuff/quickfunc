module.exports=(ar,r)=>{
  r = r ?? null;
  if (Array.isArray(ar)) {
    ar.sort((a, b) => a - b);
    if (r) ar.reverse();
    return ar;
  } else throw new Error("Using the 'sortArray' function requires an array.");
}