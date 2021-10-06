import data from "./data.json";

const listaClientes = [...data.clients]
const listaCompras = [...data.purchases]
const consultaCompras = listaClientes.map((elem) => {
return elem.nome + " Sousa"
})


// consultaCliente([0])
console.log(consultaCompras);
