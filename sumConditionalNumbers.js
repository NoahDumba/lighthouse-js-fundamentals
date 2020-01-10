const conditionalSum = function(manta, condition) {
  if(condition === "even")
    even = true;
  else
    even = false;
  
  let sum = 0;

  for(let i = 0; i < manta.length; i++){
    if(even === true && manta[i] % 2 === 0)
      sum += manta[i];
    else if(even === false && manta[i] % 2 !== 0)
      sum += manta[i]
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));