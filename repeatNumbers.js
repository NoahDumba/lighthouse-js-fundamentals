let repeatNumbers = function(data) {
  let str = '';
  let digit = 0;
  let repetitions = 0;
  for (let element of data) {
    digit = element[0];
    repetitions = element[1];

    for (let x = 0; x < repetitions; x++) {
      str += digit;
    }

    if (element !== data[data.length - 1])
      str += ', ';
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));