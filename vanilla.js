console.log('Loading all functions...');
console.log('Loading averageArray...');
function averageArray(a){
  if(Array.isArray(a))return a.reduce((acc,val)=>acc+val,0)/a.length;else throw new Error("Using the 'averageArray' function requires an array.");
}
console.log('Loading checkArray...');
function checkArray(a,l){
  if(l!=='array')return a.filter(function(element){if(Array.isArray)return typeof element===l;else return false;});else return a.filter(Array.isArray);
}
console.log('done.')
console.log('Loading oddEven...');
function oddEven(v){
  if(typeof v!=='number')throw new Error("Using the 'oddEven' function requires a number.");
  return Math.abs(v)%2===0?'even':'odd';
}
console.log('done.')
console.log('Loading prime...');
function prime(v){
  if(typeof v!=='number')throw new Error("Using the 'prime' function requires a number.");else{if(v%2!==0){if(v%3!==0){if(v%5!==0){if(v%7!==0){return true;}return 7;}return 5;}return 3;}return 2;}
}
console.log('done.')
console.log('Loading randomArray...');
function randomArray(a){
  if(Array.isArray(a))return a[Math.floor(Math.random()*a.length)];else throw new Error("Using the 'randomArray' function requires an array.");
}
console.log('done.')
console.log('Loading reverseArray...');
function reverseArray(a){
  if(Array.isArray(a))return a.reverse();else throw new Error("Using the 'reverseArray' function requires an array.");
}
console.log('done.')
console.log('Loading sortArray...');
function sortArray(r,n){
  if(!Array.isArray(r))throw new Error("Using the 'sortArray' function requires an array.");n&&r.reverse();i(r,0,r.length-1);return r};function i(n,t,e){if(t<e){let r=o(n,t,e);i(n,t,r-1);i(n,r+1,e)}}function o(n,t,e){let i=n[e],o=t-1;for(let r=t;r<e;r++){if(n[r]<=i){[n[++o],n[r]]=[n[r],n[o]]}}[n[o+1],n[e]]=[n[e],n[o+1]];return o+1;
}
console.log('done.')
console.log('All functions are loaded!');