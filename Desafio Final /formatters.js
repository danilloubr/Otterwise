import data from './data.json'

import { format } from 'date-fns'

import { soma } from './math.js'

const clientes = [...data.clients]
const compras = [...data.purchases]

export function filtrarCliente(p) {
  const novosClientes = clientes.find(elem => elem.id === p)
  return novosClientes
}

export function filtrarCompra(p) {
  const novasCompras = compras.filter(elem => elem.client_id === p)
  return novasCompras
}

export function mudarData(arr) {

  const novoArray = arr.map(elem => ({
    ...elem,
    data: new Date(`${elem.data.slice(-4)}, ${elem.data.slice(-7, -5)}, ${elem.data.slice(0, 2)}`),
  }))
  return novoArray
 
}

export function ordenarData(arr) {
  arr.sort((a, b) => a.data - b.data)
  return arr
}

export function dataBR(arr) {  
  const comprasOrdernadas = arr.map(elem => ({
    ...elem,
    data: format(new Date(elem.data), 'dd/MM/yyyy'),
  }))
  return comprasOrdernadas
}

const novoClientes = filtrarCliente(1)
const novasCompras = filtrarCompra(1)
const datasOrdenadas = dataBR(ordenarData(mudarData(novasCompras)))
const totalCompras = soma(novasCompras)
/* _________________________________________________________________*/

const novoClientes2 = filtrarCliente(2)
const novasCompras2 = filtrarCompra(2)
const datasOrdenadas2 = dataBR(ordenarData(mudarData(novasCompras2)))
const totalCompras2 = soma(novasCompras2)
/* _________________________________________________________________*/

const novoClientes3 = filtrarCliente(3)
const novasCompras3 = filtrarCompra(3)
const datasOrdenadas3 = dataBR(ordenarData(mudarData(novasCompras3)))
const totalCompras3 = soma(novasCompras3)
/* _________________________________________________________________*/
const novoClientes4 = filtrarCliente(4)
const novasCompras4 = filtrarCompra(4)
const datasOrdenadas4 = dataBR(ordenarData(mudarData(novasCompras4)))
const totalCompras4 = soma(novasCompras4)
/* _________________________________________________________________*/

export function imprimeCliente(id) {
 
  if (id === 1){console.log(`Cliente: ${novoClientes.id} - ${novoClientes.nome}`)
  console.log(`Compra em ${datasOrdenadas[0].data} no total de R$${novasCompras[0].total}.`)
  console.log(`Compra em ${datasOrdenadas[1].data} no total de R$${novasCompras[1].total}.`)
  console.log(`Total do cliente: R$${totalCompras}`)
  } if (id === 2) {{console.log(`Cliente: ${novoClientes2.id} - ${novoClientes2.nome}`)
  console.log(`Compra em ${datasOrdenadas2[0].data} no total de R$${novasCompras2[0].total}.`)
  console.log(`Compra em ${datasOrdenadas2[1].data} no total de R$${novasCompras2[1].total}.`)
  console.log(`Total do cliente:  R$${totalCompras2}`)}
  }if (id === 3) {console.log(`Cliente: ${novoClientes3.id} - ${novoClientes3.nome}`)
  console.log(`Compra em ${datasOrdenadas3[0].data} no total de R$${novasCompras3[0].total}.`)
  console.log(`Compra em ${datasOrdenadas3[1].data} no total de R$${novasCompras3[1].total}.`)
  console.log(`Total do cliente: R$${totalCompras3}`)
  }if (id === 4) {{console.log(`Cliente: ${novoClientes4.id} - ${novoClientes4.nome}`)
  console.log(`Compra em ${datasOrdenadas4[0].data} no total de R$${novasCompras4[0].total}.`)
  console.log(`Compra em ${datasOrdenadas4[1].data} no total de R$${novasCompras4[1].total}.`)
  console.log(`Total do cliente: R$${totalCompras4}`)}
  }
  }



