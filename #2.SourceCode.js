const prompt = require('prompt-sync')();

// taking user input
let age = prompt("hey there ");
age = Number.parseInt(age)

// using for loop
for(let i = 0; i<age; i++){
  console.log(i)
}

// Using while loop
let i = 0
while(i<age){
  console.log(i)
  i++
}

// using do-while loop
let i = 0
do{
  console.log(i)
  i++
}while(i<age)

