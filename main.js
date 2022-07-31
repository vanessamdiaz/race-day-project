let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true
let runnerAge = 25

if(runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000;  
}

console.log(`Runner age is ${runnerAge}`);
console.log(`Runner registered early: ${earlyRegister}`);


if (runnerAge > 18 && earlyRegister === true) {
    console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`);
}   else if (runnerAge > 18 && earlyRegister === false) {
    console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
}   else if (runnerAge < 18) {
    console.log(`You will race at 12:30 pm and your race number is ${raceNumber}.`);
}

