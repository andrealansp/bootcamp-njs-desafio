import clienteRepository from "../repositories/cliente.repository.js";

async function criarCliente(cliente) {
  return await clienteRepository.inserirCliente(cliente);
}

async function retornarClientes() {
  return await clienteRepository.retornarClientes();
}

async function retornaCliente(id) {
  return await clienteRepository.retornaCliente(id);
}

async function excluirCliente(id) {
  return await clienteRepository.excluirCliente(id);
}

async function atualizarCliente(cliente) {
  return await clienteRepository.atualizarClientes(cliente);
}

export default {
  criarCliente,
  retornarClientes,
  retornaCliente,
  excluirCliente,
  atualizarCliente,
};
