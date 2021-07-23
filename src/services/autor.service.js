import autorRepository from "../repositories/autor.repository.js";
import livroRepository from "../repositories/livro.repository.js";

async function criarAutor(autor) {
  return await autorRepository.inserirAutor(autor);
}

async function retornarAutores(autor) {
  return await autorRepository.retornarAutores(autor);
}

async function retornaAutor(id) {
  return await autorRepository.retornaAutor(id);
}

async function excluirAutor(id) {
  const livros = await livroRepository.retornarLivros();
  const livrosAutor = livros
    .filter((elemento) => {
      return elemento.dataValues.autorId == id;
    })
    .map((elemento) => {
      return {
        autorId: elemento.dataValues.autorId,
        livroNome: elemento.dataValues.nome,
      };
    });

  if (livrosAutor) {
    throw new Error(
      "O autor ainda possui livros em seu nome, favor remove-los!"
    );
  } else {
    autorRepository.excluirAutor(id);
  }

  return livrosAutor; //await autorRepository.excluirAutor(id);
}

async function atualizarAutor(autor) {
  return await autorRepository.atualizarAutor(autor);
}

export default {
  criarAutor,
  retornarAutores,
  retornaAutor,
  excluirAutor,
  atualizarAutor,
};
