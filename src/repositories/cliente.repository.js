import clienteModel from "../models/cliente.model.js";

async function inserirCliente(cliente) {
  try {
    return await clienteModel.create(cliente);
  } catch (e) {
    throw e;
  }
}

async function retornarClientes() {
  try {
    return await clienteModel.findAll({
      attributes: ["nome", "email", "telefone", "endereco"],
    });
  } catch (e) {
    throw e;
  }
}

async function retornaCliente(id) {
  try {
    return await clienteModel.findByPk(id, {
      attributes: ["nome", "email", "telefone", "endereco"],
    });
  } catch (e) {
    throw e;
  }
}

async function atualizarClientes(cliente) {
  try {
    await clienteModel.update(cliente, {
      where: { clienteId: cliente.clienteId },
    });
    return await retornaCliente(cliente.clienteId);
  } catch (e) {
    throw e;
  }
}

async function excluirCliente(id) {
  try {
    await clienteModel.destroy({
      where: {
        clienteId: id,
      },
    });
  } catch (e) {
    throw e;
  }
}

export default {
  inserirCliente,
  retornarClientes,
  atualizarClientes,
  retornaCliente,
  excluirCliente,
};
