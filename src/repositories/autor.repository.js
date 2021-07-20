import autorModel from "../models/autor.model.js";

async function inserirAutor(autor) {
  try {
    return await autorModel.create(autor);
  } catch (e) {
    throw e;
  }
}
async function retornarAutores() {
  try {
    return await autorModel.findAll();
  } catch (e) {
    throw e;
  }
}
async function retornaAutor(id) {
  try {
    const autor = await autorModel.findByPk(id);
    if (!autor) {
      return {
        message:
          "Não foi encontrado nenhum Autor, verifique o ID a ser consultado",
      };
    }
    return autor;
  } catch (e) {
    throw e;
  }
}
async function excluirAutor(id) {
  try {
    console.log(id);
    return await autorModel.destroy({ where: { autorId: id } });
  } catch (e) {
    throw e;
  }
}
async function atualizarAutor(autor) {
  try {
    await autorModel.update(autor, {
      where: { autorId: autor.autorId },
    });

    return retornaAutor(autor.autorId);
  } catch (e) {
    throw e;
  }
}

export default {
  inserirAutor,
  retornarAutores,
  retornaAutor,
  excluirAutor,
  atualizarAutor,
};
