module.exports=(v)=>{if(typeof v!=='number')throw new Error("Using the 'oddEven' function requires a number.");
return Math.abs(v)%2===0?'even':'odd';}