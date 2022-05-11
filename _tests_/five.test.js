import createArray from './../src/five.js'

describe('createArray', () => {
  test('should return an array with user inputted numbers, lowest number at 0 index and highest number at the final index place', () => {
    const answer = createArray(28, 2);
    expect(answer.slice(0, 1)).toEqual([2]);
    expect(answer.slice(-1)).toEqual([28]);
  });
});