// // 1)
// const nome = 'Gabriel'
// const sobrenome = 'Barros'

// console.log(nome + ' ' + sobrenome)

// // 2)

// const valoresEntrada = {
//   Distância: 240,
//   Velocidade: 80,
//   Litros: 20,
// }

// const mediaDeConsumo = valoresEntrada.Distância / valoresEntrada.Litros
// const tempoDeViagem = valoresEntrada.Distância / valoresEntrada.Velocidade
// console.log(
//   `Média de viagem: ${mediaDeConsumo} km/l, e o Tempo de Viagem: ${tempoDeViagem} horas.`
// )

// // 3)

// const valoresEntrada2 = [
//   {
//     Nome: 'Danilo',
//     SalarioFixo: 2000,
//     ValorTotalVendido: 30000,
//     PorcentagemComissao: 1,
//   },
//   {
//     Nome: 'Matheus',
//     SalarioFixo: 5000,
//     ValorTotalVendido: 100000,
//     PorcentagemComissao: 10,
//   },
// ]

// function porcentagem(Salario, ValorTV, PC) {
//   return Salario + (ValorTV / 100) * PC
// }

// console.log(
//   `O funcionário ${
//     valoresEntrada2[0].Nome
//   } teve um valor mensal: R$ ${porcentagem(
//     valoresEntrada2[0].SalarioFixo,
//     valoresEntrada2[0].ValorTotalVendido,
//     valoresEntrada2[0].PorcentagemComissao
//   )}`
// )
// console.log(
//   `O funcionário ${
//     valoresEntrada2[1].Nome
//   } teve um valor mensal: R$ ${porcentagem(
//     valoresEntrada2[1].SalarioFixo,
//     valoresEntrada2[1].ValorTotalVendido,
//     valoresEntrada2[1].PorcentagemComissao
//   )}`
// )

// 4)

// const usuarios = [
//   { nome: 'Valter', idade: 23 },
//   { nome: 'Juliana', idade: 12 },
// ]

// function consultarIdade(usuarios) {
//   if (usuarios.idade > 18) {
//     console.log(usuarios.nome + ' ' + 'é maior de idade, pode ser preso.')
//   } else {
//     console.log(usuarios.nome + ' ' + 'é menor de idade, só bebe leite.')
//   }
// }

// usuarios.forEach(consultarIdade)

//5)

// function numero(numero) {
//   if (numero % 2 === 0) {
//     console.log(numero + ' ' + 'é par.')
//   } else {
//     console.log(numero + ' ' + 'é impar.')
//   }
// }

// numero(50)
// numero(17)

// 6)

// const triangulos = [
//   { lado1: 10, lado2: 5, lado3: 10 },
//   { lado1: 10, lado2: 10, lado3: 10 },
//   { lado1: 2, lado2: 1, lado3: 5 },
// ]

// console.table(triangulos[0])

// function tipoTriangulo(triangulos) {
//   if (
//     (triangulos.lado1 === triangulos.lado2,
//     triangulos.lado1 === triangulos.lado3,
//     triangulos.lado2 === triangulos.lado3)
//   ) {
//     console.log('Esse é um triangulo Equilátero')
//   } else if (triangulos.lado1 === triangulos.lado2) {
//     console.log('Esse é um triangulo Isósceles')
//   } else if (triangulos.lado1 === triangulos.lado3) {
//     console.log('Esse é um triangulo Isósceles')
//   } else if (triangulos.lado2 === triangulos.lado3) {
//     console.log('Esse é um triangulo Isósceles')
//   } else {
//     console.log('Esse é um triangulo Escaleno')
//   }
// }

// tipoTriangulo(triangulos[0])
// tipoTriangulo(triangulos[1])
// tipoTriangulo(triangulos[2])

// 7)

// function comparar(numero1, numero2) {
//   if (numero1 > numero2) {
//     console.log(`${numero1} é maior que ${numero2}`)
//   } else if (numero1 < numero2) {
//     console.log(`${numero1} é menor que ${numero2}`)
//   } else if (numero1 === numero2) {
//     console.log(`${numero1} é igual a ${numero2}`)
//   }
// }

// comparar(7, 7)
// comparar(5, 2)
// comparar(2, 5)

// 8)

// for (let i = 1; i <= 50; i++) {
//   console.log(i)
// }

// let contador = 0

// while (contador < 50) {
//   contador++
//   console.log(contador)
// }

// 9)

// let contador = 100

// while (contador < 200) {
//   contador = contador + 10
//   console.log(contador)
// }

// // 10 - não consegui encontrar a solução)

// let contador = 10

// while (contador < 55) {
//   contador = contador + contador++

//   console.log(contador)
// }

// 11)

// const nomes = ['Ronaldinho', 'Neymar', 'Messi', 'Ronaldo', 'Pogba']

// console.log(nomes.join(', '))

// 12)

// const numeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

// const numerosPositivos = numeros.filter(numeros =>
//   numeros > 0 ? console.log(numeros) : ''
// )

// const numeros2 = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255]

// const numerosPositivos2 = numeros2.filter(numeros2 =>
//   numeros2 > 0 ? console.log(numeros2) : ''
// )

// 13 não conseguir completar o codigo.)

const alunos = [
  { nome: `Marcos`, notas: [10, 7, 2] },

  { nome: `Michele`, notas: [10, 10, 10] },

  { nome: `Pedro`, notas: [3, 10, 9] },

  { nome: `Andressa`, notas: [6, 6, 8] },

  { nome: `Cristiana`, notas: [7, 9, 2] },
]

const soma = (alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2]) / 3
const soma2 = (alunos[1].notas[0] + alunos[1].notas[1] + alunos[1].notas[2]) / 3
const soma3 = (alunos[2].notas[0] + alunos[2].notas[1] + alunos[2].notas[2]) / 3
const soma4 = (alunos[3].notas[0] + alunos[3].notas[1] + alunos[3].notas[2]) / 3
const soma5 = (alunos[4].notas[0] + alunos[4].notas[1] + alunos[4].notas[2]) / 3

function aprovados() {
  if (soma > 7) {
    console.log(`${alunos[0].nome} está aprovado.`)
  } else if (soma2 > 7) {
    console.log(`${alunos[1].nome} está aprovado.`)
  } else if (soma3 > 7) {
    console.log(`${alunos[2].nome} está aprovado.`)
  } else if (soma4 > 7) {
    console.log(`${alunos[3].nome} está aprovado.`)
  } else if (soma5 > 7) {
    console.log(`${alunos[4].nome} está aprovado.`)
  }
}
alunos.forEach(aprovados)

// 14)

// let cidades = [
//   {
//     ibge: 3509502,
//     nome: 'Campinas',
//     uf: 'SP',
//     habitantes: 1213792,
//     capital: false,
//   },

//   {
//     ibge: 3518800,
//     nome: 'Guarulhos',
//     uf: 'SP',
//     habitantes: 1392121,
//     capital: false,
//   },

//   {
//     ibge: 3548708,
//     nome: 'São Bernardo do Campo',
//     uf: 'SP',
//     habitantes: 844483,
//     capital: false,
//   },

//   {
//     ibge: 3304557,
//     nome: 'Rio de Janeiro',
//     uf: 'RJ',
//     habitantes: 6747815,
//     capital: true,
//   },

//   {
//     ibge: 3300100,
//     nome: 'Angra dos Reis',
//     uf: 'RJ',
//     habitantes: 207044,
//     capital: false,
//   },

//   {
//     ibge: 3301702,
//     nome: 'Duque de Caxias',
//     uf: 'RJ',
//     habitantes: 924624,
//     capital: false,
//   },

//   {
//     ibge: 3304904,
//     nome: 'São Gonçalo',
//     uf: 'RJ',
//     habitantes: 1091737,
//     capital: false,
//   },

//   {
//     ibge: 5300108,
//     nome: 'Brasília',
//     uf: 'DF',
//     habitantes: 3055149,
//     capital: true,
//   },

//   {
//     ibge: 2927408,
//     nome: 'Salvador',
//     uf: 'BA',
//     habitantes: 2886698,
//     capital: true,
//   },

//   {
//     ibge: 4305108,
//     nome: 'Caxias do Sul',
//     uf: 'RS',
//     habitantes: 517451,
//     capital: false,
//   },

//   {
//     ibge: 2933307,
//     nome: 'Vitória da Conquista',
//     uf: 'BA',
//     habitantes: 341128,
//     capital: false,
//   },

//   {
//     ibge: 3550308,
//     nome: 'São Paulo',
//     uf: 'SP',
//     habitantes: 12325232,
//     capital: true,
//   },

//   {
//     ibge: 2918407,
//     nome: 'Juazeiro',
//     uf: 'BA',
//     habitantes: 218162,
//     capital: false,
//   },

//   {
//     ibge: 2910800,
//     nome: 'Feira de Santana',
//     uf: 'BA',
//     habitantes: 619609,
//     capital: false,
//   },

//   {
//     ibge: 4314407,
//     nome: 'Pelotas',
//     uf: 'RS',
//     habitantes: 343132,
//     capital: false,
//   },

//   {
//     ibge: 4314902,
//     nome: 'Porto Alegre',
//     uf: 'RS',
//     habitantes: 1488252,
//     capital: true,
//   },

//   {
//     ibge: 4316907,
//     nome: 'Santa Maria',
//     uf: 'RS',
//     habitantes: 283677,
//     capital: false,
//   },
// ]

// // a)

// function nomeCidade(codigo) {
//   cidades.filter(elem => {
//     elem.ibge === codigo ? console.log(elem.nome) : ''
//   })
// }

// nomeCidade(4316907)

// // b)

// function nomeCidades(estado) {
//   cidades.filter(elem => {
//     elem.uf === estado ? console.log(elem) : ''
//   })
// }

// nomeCidades('RJ')

// // c)

// cidades
//   .sort((a, b) => {
//     if (a.nome < b.nome) return -1
//     if (a.nome > b.nome) return 1
//     return 0
//   })
//   .filter(function (elem) {
//     return console.log(elem.nome)
//   })

// // d)

// cidades.sort((a, b) => b.habitantes - a.habitantes)

// console.log(cidades[0])

// // e)

// cidades.sort((a, b) => a.habitantes - b.habitantes)
// console.table(cidades)

// // f não concluida)

// function quantidadeHab(estado) {
//   cidades.filter(elem => {
//     elem.uf === estado ? console.table(elem.habitantes) : ''
//   })
// }

// quantidadeHab('RS')

// // g nem tentei)

// // 15 não tentei)

const consultaCep = cep => {
  const timer = (Math.floor(Math.random() * 4) + 1) * 500

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const CEP_LENGTH = 8

      const sanitazedCep = cep.replace(/\D/g, '') // Remove todos os símbolos não numéricos

      sanitazedCep.length === CEP_LENGTH
        ? resolve(`${cep} é um CEP válido`)
        : reject(`${cep} não é um CEP válido`)
    }, timer)
  })
}
