// A constant that keeps my age 
const myAge = 31

// The first two years of a dog's life count as 10.5 years of a human, so we multiply the first two years of a human's life by those years.
let earlyYears = 2
earlyYears *= 10.5

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2

// multiply the following human years by 4 
laterYears *= 4

// we add up the first two dog years and the following dog years and store them in a variable
const myAgeInDogYears = earlyYears + laterYears

// we store our name in a variable and use the method to change to lower case
const myName = 'Natalia'.toLowerCase()

// We concatenate the different variables that we have been creating and calculating into a single sentence.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)