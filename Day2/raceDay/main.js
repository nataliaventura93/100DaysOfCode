let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true
let ageRunner = 12

if(ageRunner>18 && earlyRegistered) {
  raceNumber += 1000
}

if(ageRunner>18 && earlyRegistered) {
  console.log(`You will race at 9:30 am. And your race number is ${raceNumber}`)
} else if (ageRunner>18 && !earlyRegistered) {
  console.log(`You will race at 11:00 am. And your race number is ${raceNumber}`)
} else if (ageRunner<18){
  console.log(`You will race at 12:30 pm. And your race number is ${raceNumber}`)
} else if (ageRunner===18) {
  console.log('You have to see the registration desk')
}
