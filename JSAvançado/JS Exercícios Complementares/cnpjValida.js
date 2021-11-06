function validaCNPJ(cnpj) {
  const cnpjValida = cnpj
  //'11.222.333/0001-81'
  //cnpjLimpo 11222333000181
  //cnpjInicial 112223330001
  //cnpjMeio 1122233300018
  //cnpj Final 11222333000181

  //cnpjLimpo vs cnpjFinal  -> válido ou inválido

  // limpar os caracteres dos numeros
  const cnpjLimpo = cnpjValida.replace(/\D/g, '')

  let cnpjInicial = cnpjLimpo.slice(0, 12)

  const arrayCnpj = Array.from(cnpjInicial)

  const verificador = '543298765432'

  const arrayVerificador = Array.from(verificador)

  const somatorio = arrayVerificador.reduce((acc, value, index) => {
    return acc + value * arrayCnpj[index]
  }, 0)

  let indice1 = somatorio % 11 < 2 ? 0 : 11 - (somatorio % 11)

  cnpjMedio = cnpjInicial.concat(indice1)

  const arrayCnpj2 = Array.from(cnpjMedio)

  const verificador2 = '6543298765432'
  const arrayVerificador2 = Array.from(verificador2)

  const somatorio2 = arrayVerificador2.reduce((acc, value, index) => {
    return acc + value * arrayCnpj2[index]
  }, 0)

  let indice2 = somatorio2 % 11 < 2 ? 0 : 11 - (somatorio2 % 11)

  cnpjFinal = cnpjMedio.concat(indice2)

  //   console.log(cnpjLimpo)
  //   console.log(cnpjFinal)

  console.log(
    cnpjLimpo === cnpjFinal
      ? 'CNPJ é Valido, pode confiar.'
      : 'CNPJ Safado, ligando para PF.'
  )
}

validaCNPJ('11.222.333/0001-81')
