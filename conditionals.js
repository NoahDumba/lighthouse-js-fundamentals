const raining = true;
const cold = false;
const temp = 13

if(temp < -40 || temp > 40){
  console.log("Maybe dont go outside...");
}
else if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
if(!raining){
  console.log("Leave your umbrella at home!");
}
console.log("Now you're ready to go outside!");