import data from "./data.json";

import { format } from "date-fns";

import { soma } from "./math.js";

const clientes = [...data.clients];
const compras = [...data.purchases];

export function filtrarCliente(p) {
  const novosClientes = clientes.find((elem) => elem.id === p);
  return novosClientes;
}

// console.log("TESTE CLIENTE:", filtrarCliente(2).id)

export function filtrarCompra(p) {
  const novasCompras = compras.filter((elem) => elem.client_id === p);
  return novasCompras;
}

export function mudarData(arr) {
  const novoArray = arr.map((elem) => ({
    ...elem,
    data: new Date(
      `${elem.data.slice(-4)}, ${elem.data.slice(-7, -5)}, ${elem.data.slice(
        0,
        2
      )}`
    ),
  }));
  return novoArray;
}

export function ordenarData(arr) {
  arr.sort((a, b) => a.data - b.data);
  return arr;
}

export function dataBR(arr) {
  const comprasOrdernadas = arr.map((elem) => ({
    ...elem,
    data: format(new Date(elem.data), "dd/MM/yyyy"),
  }));
  return comprasOrdernadas;
}

const comprasOrdenadas = dataBR(ordenarData(mudarData(filtrarCompra(1))));
const totalCompras = soma(filtrarCompra(1));
/* _________________________________________________________________*/

const comprasOrdenadas2 = dataBR(ordenarData(mudarData(filtrarCompra(2))));
const totalCompras2 = soma(filtrarCompra(2));
/* _________________________________________________________________*/

const comprasOrdenadas3 = dataBR(ordenarData(mudarData(filtrarCompra(3))));
const totalCompras3 = soma(filtrarCompra(3));
/* _________________________________________________________________*/

const comprasOrdenadas4 = dataBR(ordenarData(mudarData(filtrarCompra(4))));
const totalCompras4 = soma(filtrarCompra(4));
/* _________________________________________________________________*/

const dados = comprasOrdenadas
  .map((elem) => {
    return `Compra em ${elem.data} no total de R$ ${elem.total}`;
  })
  .join(" - ");
const dados2 = comprasOrdenadas2
  .map((elem) => {
    return `Compra em ${elem.data} no total de R$ ${elem.total}`;
  })
  .join(" - ");
const dados3 = comprasOrdenadas3
  .map((elem) => {
    return `Compra em ${elem.data} no total de R$ ${elem.total}`;
  })
  .join(" - ");
const dados4 = comprasOrdenadas4
  .map((elem) => {
    return `Compra em ${elem.data} no total de R$ ${elem.total}`;
  })
  .join(" - ");

// console.log("DATA AQUI:", datasOrdenadas)

// export function consultaCliente(id) {
//   if (id === 1) {
//     console.log(`Cliente: ${filtrarCliente(1).id} - ${filtrarCliente(1).nome}`);
//     console.log(dados)
//     console.log(`Total do cliente: R$${totalCompras.toFixed(2)}`);
//   }
//   if (id === 2) {
//     console.log(`Cliente: ${filtrarCliente(2).id} - ${filtrarCliente(2).nome}`);
//     console.log(dados2)
//     console.log(`Total do cliente:  R$${totalCompras2.toFixed(2)}`);
//   }
//   if (id === 3) {
//     console.log(`Cliente: ${filtrarCliente(3).id} - ${filtrarCliente(3).nome}`);
//     console.log(dados3)
//     console.log(`Total do cliente: R$${totalCompras3.toFixed(2)}`);
//   }
//   if (id === 4) {
//     console.log(`Cliente: ${filtrarCliente(4).id} - ${filtrarCliente(4).nome}`);
//     console.log(dados4)
//     console.log(`Total do cliente: R$${totalCompras4.toFixed(2)}`);
//   }
//   if (id > 4) {
// console.log("Cliente não está cadastrado.")
//   }
// }

export function consultarCliente(id) {
  const clientes = {
    1: `Cliente: ${filtrarCliente(1).id} - ${
      filtrarCliente(1).nome
    }: ${dados} = Total do cliente: R$${totalCompras.toFixed(2)}`,
    2: `Cliente: ${filtrarCliente(2).id} - ${
      filtrarCliente(2).nome
    }: ${dados2} = Total do cliente: R$${totalCompras2.toFixed(2)}`,
    3: `Cliente: ${filtrarCliente(3).id} - ${
      filtrarCliente(3).nome
    }: ${dados3} = Total do cliente: R$${totalCompras3.toFixed(2)}`,
    4: `Cliente: ${filtrarCliente(4).id} - ${
      filtrarCliente(4).nome
    }: ${dados4} = Total do cliente: R$${totalCompras4.toFixed(2)}`,
    default: "Ops, não temos esse cliente cadastrado.",
  };
  return console.log(clientes[id] || clientes.default)
}
