let numberOfVowels = function(data) {
  let sum = 0;
  for(let i = 0; i < data.length; i++){
    var character = data.charAt(i);
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      sum++;
    }
  }
  return sum;
};
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));