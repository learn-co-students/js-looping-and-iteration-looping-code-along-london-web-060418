function printBadges(namesArray) {
  for (let i=0; i < namesArray.length; i++){
    console.log(`Welcome ${namesArray[i]}! You are employee #${i+1}.`);
  }
  return namesArray;
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
