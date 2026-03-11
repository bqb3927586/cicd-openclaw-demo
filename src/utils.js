// 故意写了语法错误的文件
function formatDate(date) {
  if (!date) {
    return new Date().toLocaleString('zh-CN')
  }
  return new Date(date).toLocaleString('zh-CN')
}
function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0)
}

module.exports = {
  formatDate,
  calculateTotal
}
