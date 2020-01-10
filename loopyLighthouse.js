const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let multiple0 = (i % multiples[0] === 0);
    let multiple1 = (i % multiples[1] === 0);
    let str = '';

    if (multiple0)
      str += words[0];
    if (multiple1)
      str += words[1];

    if (str !== '')
      console.log(str);
    else
      console.log(i);
  }
};

/*for(let i = 100; i <= 200; i++){
  if(i%3 === 0 && i%4 === 0){
    console.log('LoopyLighthouse');
  }
  else if(i%3 === 0){
    console.log('Loopy');
  }
  else if(i%4 === 0){
    console.log('Lighthouse');
  }
  else{
    console.log(i);
  }
}
*/

loopyLighthouse([1,20],[3,5],['foo','bar']);