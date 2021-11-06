import conif from 'node-console-input'
import fetch from 'node-fetch'
import {intervalToDuration} from "date-fns"

let cnpj = conif.getConsoleInput('Digite o CNPJ da empresa, por favor:')

const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj.replace(/\D/g, '')}`)
const data = await response.json()

   
    function menu() {
      console.log('1. Razão Social e Nome Fantasia da empresa:')
      console.log('2. Atividades da empresa:')
      console.log('3. Endereço da empresa:')
      console.log('4. Situação da empresa:')
      console.log('5. Tempo de operação da empresa:')
      console.log('6. Sair.')
      console.log(' ')
      
  let opcao = conif.getConsoleInput('Selecione a opçào desejada: ')
  return opcao
}

let retorno = menu()

while ( retorno!=="6" ){
  retorno = menu()


if (retorno === '1') console.log(`\nO nome da empresa é: ${data.nome}, e o nome fantasia é: ${data.fantasia}.\n`)
  if (retorno === '2') {let {atividade_principal: [{ text }],atividades_secundarias: [{ text: texto }],} = data
  console.log(`\nA atividade principal da empresa é: ${text}, e as atividades secundárias são: ${texto}.\n`)}
  if (retorno === '3') console.log(`\nA empresa fica localizada em: ${data.logradouro}, nº${data.numero}, ${data.bairro}, ${data.municipio}/${data.uf}, ${data.cep}.\n`)
  if (retorno === '4') console.log(`\nA situação da empresa é: ${data.situacao}.\n`)
  if (retorno === '5') {let formatedDate = new Date(`${data.abertura.slice(-4)},${data.abertura.slice(-7,-5)},${data.abertura.slice(0,2)}`)
  let time = intervalToDuration({
      start: formatedDate,
      end: new Date()
  })
  console.log(`\nO tempo de operação da empresa é ${time.years} anos e ${time.months} meses.\n`)}
  if (retorno === '') console.log(`\nObrigado, tchau.\n`)
}
  
menu()

// 45.997.418/0001-53
