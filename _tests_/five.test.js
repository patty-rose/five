import { RuleTester } from 'eslint';
import {createArray, minusFiveArray} from './../src/five.js'

describe('createArray', () => {
  test('should return an array with user inputted numbers, lowest number at 0 index and highest number at the final index place', () => {
    const answer = createArray(28, 2);
    expect(answer.slice(0, 1)).toEqual([2]);
    expect(answer.slice(-1)).toEqual([28]);
  });

  test('should return an array filled with each number between user inputted numbers', () => {
    const arrayOfNumbers = createArray(28, 2);
    let arrayFinal = [];
      for(let i=0; i < arrayOfNumbers; i++) {
        expect (arrayFinal.push(arrayOfNumbers[i])).toBe([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
      }
  })
});

describe('minusFiveArray', () => {
  test('should return an array filled with the range of numbers between user-inputted numbers omitting each number that includes a 5', () => {
    const arrayMinusFive = minusFiveArray(28, 2);
    expect(arrayMinusFive).toEqual([2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28]);
  })
})