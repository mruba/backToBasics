var superReduce = require('./superReducedString')


test('reduce aaabccddd to abd', () => {
  expect(superReduce('aaabccddd')).toBe('abd');
});

test('reduce baab to Empty String', () => {
  expect(superReduce('baab')).toBe('Empty String');
});
