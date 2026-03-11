const { formatDate, calculateTotal } = require('../src/utils');

test('formatDate should return correct date string', () => {
  const date = new Date('2026-03-11');
  const result = formatDate(date);
  expect(result).toContain('2026');
});

// 这个测试故意写错，期望返回10但实际是6，会测试失败
test('calculateTotal should sum all prices', () => {
  const prices = [1, 2, 3];
  const result = calculateTotal(prices);
  expect(result).toBe(10);
});
