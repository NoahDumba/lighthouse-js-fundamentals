const range = function(start, end, step){
  if(typeof start === "undefined" || typeof end === "undefined" || typeof step === "undefined"){
    console.log("1");
    return([]);
  }
  if(start > end || step <= 0){
    console.log("2");
    return([]);
  }

  let manta = [];
  for(let i = start; i <= end; i += step){
    manta.push(i);
  }
  return(manta);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));