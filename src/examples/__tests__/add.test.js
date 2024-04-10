const { add } = require('../add');

it('should return 3 when given 1 and 2 as parameters', () => {
  const result = add(1, 2);
  expect(result).toEqual(3);
});

test('the add function returns 3 when it is called with 4 and -1 as parameters', () => {
  const result = add(4, -1);
  expect(result).toEqual(3);
});

test('the add function returns -3 when it is called with -2 and -1 as parameters', () => {
  const result = add(-2, -1);
  expect(result).toEqual(-3);
});

test('the add function returns 200000000 when it is called with 100000000 and 100000000 as parameters', () => {
  const result = add(100000000, 100000000);
  expect(result).toEqual(200000000);
});
