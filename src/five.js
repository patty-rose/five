const { TestScheduler } = require("jest");

export default function createArray(num1, num2){
  let numArray = [];
  const startNumber = num1;
  const  endNumber = num2;
  numArray = [startNumber, endNumber];

  return numArray.sort();
}