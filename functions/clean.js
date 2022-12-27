module.exports=(t)=>{
  t=t||null;
  if(typeof t!=="string")t=require("util").inspect(t,{depth:1});
  t=t.replace(/`/g,"`"+String.fromCharCode(8203)).replace(/@/g,"@"+String.fromCharCode(8203));
  return t;
}