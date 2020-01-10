const urlEncode = function(text) {
  let newText = text.replace(/\s/g, "%20");
  return(newText);
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));