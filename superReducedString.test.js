var superReduce = require('./superReducedString')


test('reduce aaabccddd to abd', () => {
  expect(superReduce('aaabccddd')).toBe('abd');
});

test('reduce baab to Empty String', () => {
  expect(superReduce('baab')).toBe('Empty String');
});



aaabccddd
a

aaabccddd
aa

aaabccddd
aaa

aaabccddd
aaab

aaabccddd
aaabc

aaabccddd
aaabcc


aaabccddd
aaabcc

aaabccddd
aaabccdd

aaabccddd
aaabccdd
