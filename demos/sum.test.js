const sum = require('./sum');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('sumar 3 + 4 es igual a 7', () => {
  expect(sum(3, 4)).toBe(7);
});