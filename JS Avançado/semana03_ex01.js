function checkZero(number) {
  return (number && `${number} não é zero`) || `${number} é zero`
}

console.log(10)
console.log(checkZero(0))
console.log(checkZero(5340))
console.log(checkZero(-51454))
console.log(checkZero(555))
