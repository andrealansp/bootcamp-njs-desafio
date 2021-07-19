import clienteRepository from "../repositories/cliente.repository.js"

async function criarCliente(cliente) {
    return await clienteRepository.inserirCliente(cliente);
  }
  
  async function retornarClientes() {
    return await clienteRepository.retornarClientes();
  }
  
  async function retornaCliente(cliente) {
    
  }
  
  async function excluirCliente(id) {
   
  }
  
  async function atualizarCliente(cliente) {

  }
  
  export default {
    criarCliente,
    retornarClientes,
    retornaCliente,
    excluirCliente,
    atualizarCliente,
  };
  