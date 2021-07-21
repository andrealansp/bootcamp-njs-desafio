import livroModel from "../models/livro.model.js";

async function inserirLivro(livro) {
  try {
    return await livroModel.create(livro);
  } catch (e) {
    throw e;
  }
}

async function retornarLivros() {
  try {
    return await livroModel.findAll();
  } catch (e) {
    throw e;
  }
}

async function retornaLivro(id) {
  try {
    return await livroModel.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function atualizarLivros(livro) {
  try {
    await livroModel.update(livro, {
      where: { livroId: livro.livroId },
    });
    return await retornaLivro(livro.livroId);
  } catch (e) {
    throw e;
  }
}

async function excluirLivro(id) {
  try {
    await livroModel.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (e) {
    throw e;
  }
}

export default {
  inserirLivro,
  retornarLivros,
  atualizarLivros,
  retornaLivro,
  excluirLivro,
};
