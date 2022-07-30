let raceNumber = Math.floor(Math.random() * 1000);
const earlyraceNumber = raceNumber + 1000;
const earlyRegister = 'True'
const runnerAge = 17
const randomNumber = Math.floor(Math.random() * 8);
const eightBall = randomNumber;

if (runnerAge > 18 && earlyRegister == 'True') {
    console.log(`You will race at 9:30 am and your race number is ${earlyraceNumber}.`);
}   else if (runnerAge > 18 && earlyRegister != 'True') {
    console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
}   else if (runnerAge < 18) {
    console.log(`You will race at 12:30 pm and your race number is ${raceNumber}.`);
}

