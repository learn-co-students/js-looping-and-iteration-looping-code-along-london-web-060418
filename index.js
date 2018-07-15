// Code your solutions in this file

const employees = ['Ada', 'Brendan', 'Ali']

function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
   console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
 }

 return employees;
}


// function maybeTrue () {
//   return Math.random() >= 0.5;
// }
//
// while (maybeTrue()) {
//   console.log('And I ran... I ran so far away!');
// }


function tailsNeverFails() {
  counter = 0
  while(Math.random() >= 0.5) {
    counter ++
  }
  return `You got ${counter} tails in a row!`
}
