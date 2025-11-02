const add = require('./app');

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});
