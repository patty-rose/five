const { TestScheduler } = require("jest");

export function createArray(num1, num2){
  let numArray = [];
  const startNumber = num1;
  const  endNumber = num2;
  
  numArray = [startNumber, endNumber];

  numArray.sort();
  
  let arrayOfNumbers = [];
  
  for (let i = numArray[0]; i <= numArray[1]; i++) {
    arrayOfNumbers.push(i);
  }

  return arrayOfNumbers;

}

export function minusFiveArray (num1, num2) {
  let arrayOfNumbers = createArray(num1, num2);
  let outputArray = [];
  
  arrayOfNumbers.forEach(function (number) {
    if (number.toString().includes("5") === false) {
      outputArray.push(number);
    }
  });   
  return outputArray;
}
