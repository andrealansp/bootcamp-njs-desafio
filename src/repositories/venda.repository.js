import vendaModel from "../models/venda.model.js";

async function inserirVenda(venda) {
  try {
    return await vendaModel.create(venda);
  } catch (e) {
    throw e;
  }
}

async function retornarVendas() {
  try {
    return await vendaModel.findAll();
  } catch (e) {
    throw e;
  }
}

async function retornaVenda(id) {
  try {
    return await vendaModel.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function atualizarVendas(venda) {
  try {
    await vendaModel.update(venda, {
      where: { vendaId: venda.vendaId },
    });
    return await retornaVenda(venda.vendaId);
  } catch (e) {
    throw e;
  }
}

async function excluirVenda(id) {
  try {
    await vendaModel.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (e) {
    throw e;
  }
}

export default {
  inserirVenda,
  retornarVendas,
  atualizarVendas,
  retornaVenda,
  excluirVenda,
};
