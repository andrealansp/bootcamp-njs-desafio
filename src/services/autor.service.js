import autorRepository from "../repositories/autor.repository.js";

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
  return await autorRepository.excluirAutor(id);
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
