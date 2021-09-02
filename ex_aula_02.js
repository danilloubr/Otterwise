function checkSignal(number) {
  if (number >= 0) {
    console.log(number + ' é positivo')
  } else {
    console.log(number + ' é negativo')
  }
}

checkSignal(-99)
checkSignal(42)

function double(number) {
  return number * 2
}

console.log(double(5))

function calculete(soma, number1, number2) {
  return (soma = number1 + number2)
}

function calculete2(subtrai, number1, number2) {
  return (subtrai = number1 - number2)
}

console.log(calculete('soma', 3, 5))

console.log(calculete2('subtrai', 3, 5))
