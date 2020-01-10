const sumLargestNumbers = function(manta) {
  let ultNum = -1;
  let ultNumIndex = -1;
  let penultNum = -1;
  for(let i = 0; i < manta.length; i++){
    if(manta[i] > ultNum){
      ultNum = manta[i];
      ultNumIndex = i;
    }
  }
  for(let i = 0; i < manta.length; i++){
    if(manta[i] > penultNum && i !== ultNumIndex){
      penultNum = manta[i];
    }
  }
  return ultNum + penultNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));