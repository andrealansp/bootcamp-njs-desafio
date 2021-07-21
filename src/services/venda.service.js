import vendaRepository from "../repositories/venda.repository.js";

async function criarVenda(venda) {
  return await vendaRepository.inserirVenda(venda);
}

async function retornarVendas() {
  return await vendaRepository.retornarVendas();
}

async function retornaVenda(id) {
  return await vendaRepository.retornaVenda(id);
}

async function excluirVenda(id) {
  return await vendaRepository.excluirVenda(id);
}

async function atualizarVenda(venda) {
  return await vendaRepository.atualizarVendas(venda);
}

export default {
  criarVenda,
  retornarVendas,
  retornaVenda,
  excluirVenda,
  atualizarVenda,
};
