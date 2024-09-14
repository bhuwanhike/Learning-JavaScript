const prompt = require('prompt-sync')();

// taking user input
let age = prompt("hey there ");
age = Number.parseInt(age)

// Q-1 usage of if else statements
if(age<=20 && age>=10){
  console.log("The age is between 10 and 20");
}
else{
  console.log("the age is out of the bounds")
}

// Q-2 usage of switch case statement
switch(age){
  case 3:
    console.log("the age is less than 10")
    break
  case 16:
    console.log("the age is between 10 and 20")
    break
  case 40: 
    console.log("age is greater than 20")
    break
  default:
    console.log("this is not an age")
}

// Q-3 if a number is divisible by 2 and 3
if(age%2==0 && age%3==0){
  console.log("yes it's divisible")
}
else{
  console.log("not divisible")
}

// Q-4 if a number is divisible by 2 or 3
if(age%2==0 || age%3==0){
  console.log("yes it's divisible")
}
else{
  console.log("not divisible")
}

// Q-5 usage of ternary operator
console.log("you can", age>18? "drive":"not drive")


