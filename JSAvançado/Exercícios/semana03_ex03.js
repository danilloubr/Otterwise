/*const imprime = (number) => console.log(number)

imprime([2, 4, 2, 4])*/

const executeOnArray = function (array, func) {
  for (let i = 0; i < array.length; ++i) {
    console.log(func(array[i]))
  }
}

const double = (number) => number * 10
executeOnArray([9, 5, 2, 1], double)
