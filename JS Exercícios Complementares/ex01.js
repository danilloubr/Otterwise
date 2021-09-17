// 1)
const nome = 'Gabriel'
const sobrenome = 'Barros'

console.log(nome + ' ' + sobrenome)

// 2)

const valoresEntrada = {
  Distância: 240,
  Velocidade: 80,
  Litros: 20,
}

const mediaDeConsumo = valoresEntrada.Distância / valoresEntrada.Litros
const tempoDeViagem = valoresEntrada.Distância / valoresEntrada.Velocidade
console.log(
  `Média de viagem: ${mediaDeConsumo} km/l, e o Tempo de Viagem: ${tempoDeViagem} horas.`
)
