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
    return await clienteModel.findAll();
  } catch (e) {
    throw e;
  }
}

async function retornaCliente(id) {
  try {
    return await clienteModel.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function atualizarClientes(cliente) {
  try {
    console.log(cliente.clienteId);
    await clienteModel.update(cliente, {
      where: { clienteId: cliente.clienteId },
    });
    return await clienteModel.retornaCliente(cliente.clienteId);
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
