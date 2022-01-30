//variable initialization of myAge
const myAge= 23;
//early years
let earlyYears = 2;
earlyYears *= 10.5;
//Substract 2 from myAge and assign the value to laterYears
let laterYears = myAge - 2;
//laterYears is multiplied by four and assigned to laterYears
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears= earlyYears + laterYears;
let myName= "David".toLowerCase();
//string interpolation of myName and myAgeInDogYears
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
 