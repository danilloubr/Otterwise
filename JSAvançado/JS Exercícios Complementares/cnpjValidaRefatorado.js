function validaCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, '')
  const cnpjInicial = Array.from(cnpj.slice(0, 12))

  const verificador1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const verificador2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  function calculaIndice(arrayVerificador, arrayCnpj) {
    const somatorio = arrayVerificador.reduce((acc, value, index) => {
      return acc + value * arrayCnpj[index]
    }, 0)

    const indice = somatorio % 11 < 2 ? 0 : 11 - (somatorio % 11)

    // alguma forma diferente para clonar e puxar o indice pra dentro do array
    const novoCnpj = arrayCnpj.slice()
    novoCnpj.push(indice)

    return novoCnpj
  }
  const cnpjMedio = calculaIndice(verificador1, cnpjInicial) //indice1
  const cnpjFinal = calculaIndice(verificador2, cnpjMedio) //indices 1 e 2

  const cnpjCalculado = cnpjFinal.join('')

  console.log(
    cnpj === cnpjCalculado
      ? 'CNPJ é Válido, pode confiar.'
      : 'CNPJ Safado, ligando para PF.'
  )
}

validaCNPJ('11.222.333/0001-81')
validaCNPJ('11.222.333/0001-61')
