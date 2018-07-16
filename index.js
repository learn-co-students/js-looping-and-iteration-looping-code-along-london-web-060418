// Code your solutions in this file
function printBadges(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function flip() {
   return Math.random() >= 0.5;
 }

function tailsNeverFails() {
  count = 0;
  while(true)
  {
    if(flip()) {
      count += 1;
    } else {
      break;
    }
  }
  return `You got ${count} tails in a row!`;
}
