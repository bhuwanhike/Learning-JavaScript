const prompt = require('prompt-sync')();

// Q-1 Printing the marks of student in an object, usage of for loop

const obj = {
  harry: 76,
  carry: 45,
  gemmy: 35
}
let l = Object.keys(obj).length;
for(let i =0; i<l; i++){
  console.log(Object.keys(obj)[i])
}

// using for in loop
for(i in obj){
  console.log(obj[i])
}

// Q-2 Print "try again" until the user enters the correct number, usage of while loop
let num = prompt("Enter the number: ")
while(num!=5){
  console.log("Try again")
  num = prompt("Enter the number: ")
}

//  Q-3 Write a function to find mean of 5 numbers
const mean = (a,b,c,d,e) => {
  return (a+b+c+d+e)/5
}
console.log(mean(1,2,3,4,5))
