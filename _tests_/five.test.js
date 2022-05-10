import createArray from './../src/five.js'

describe('createArray', () => {
  test('should return one numbers', () => {
    expect(createArray(2)).toBe(2);
  })
});