var recursiveDigitSum = require('./recursiveDigitSum')

test('recursive Digit Sum form 148148148 to 9', ()=>{
  expect(recursiveDigitSum(148148148)).toBe(3)
})


test('recursive Digit Sum form 1010101010 to 9', ()=>{
  expect(recursiveDigitSum(1010101010)).toBe(5)
})
