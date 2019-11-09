
const computeSum = () => {
  let sum = 0
  for (let i = 0; i < 1000000; i++) {
    sum += i
  }
  return sum
}

process.on('message', (action) => {
  if (action.type === 'start') {
    let sum = computeSum()
    process.send({
      type: 'sum',
      sum
    })
  }
})