const myAge = 21; // your Age
let earlyYears = 2; // The first two years of a dog’s life count as 10.5 dog years each.

earlyYears *= (10.5) ;
let laterYears = myAge - 2; // rest of the years

laterYears *= 4

console.log(earlyYears);
console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears ; //your dog's age

var myName = "Kerem Can".toUpperCase(); //The toUpperCase method returns a string with all uppercase letters.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // print process
