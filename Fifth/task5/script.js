const myName ="randa erfan"
console.log(`${myName}`)


function sumNumbersUpTo(limit) {
    if (!isNaN(limit) && limit >0){
  let sum = 0;
  let start = 1
  while(start <= limit){
    sum += start
    start +=1
  }
  return sum;
  }
  

else {
    console.log(`Please enter number and it must be greater than Zero`)
}
}


function multiplicationTable(number) {
     if (!isNaN(number) && number >0){
  console.log(`mutiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
  }
}else{
    console.log(`Please enter number and it must be greater than Zero`)
}
}


const userName = prompt("What is your name ?");
if (isNaN(userName)){
console.log(`Hello ${userName}!`);
}
else{
    console.log(`Please enter characters not numbers`)
}

const numberInput1 = prompt("Write number to get the mutiplication Table of it :");
const number1 = parseInt(numberInput1);

multiplicationTable(number1);

const numberInput2 = prompt("Write number to get Sum of the numbers from one to this number :");
const number2 = parseInt(numberInput2);

const totalSum = sumNumbersUpTo(number2);
console.log(`Sum of the numbers from one to ${number2} is : ${totalSum}`);


