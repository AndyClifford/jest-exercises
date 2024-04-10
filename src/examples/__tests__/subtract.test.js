const { subtract } = require('../subtract');

test('the subtract function returns 1 when it is called with 2 and 1 as parameters', () => {
  const result = subtract(2, 1);
  expect(result).toEqual(1);
});

test('the subtract function returns -3 when it is called with 4 and 1 as parameters', () => {
  const result = subtract(1, 4);
  expect(result).toEqual(-3);
});

test('the subtract function returns -1 when it is called with -2 and -1 as parameters', () => {
  // TODO
});

test('the subtract function returns 0 when it is called with 100000000 and 100000000 as parameters', () => {
  // TODO
});
