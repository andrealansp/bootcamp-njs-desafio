import livroRepository from "../repositories/livro.repository.js";

async function criarLivro(livro) {
  return await livroRepository.inserirLivro(livro);
}

async function retornarLivros() {
  return await livroRepository.retornarLivros();
}

async function retornaLivro(id) {
  return await livroRepository.retornaLivro(id);
}

async function excluirLivro(id) {
  return await livroRepository.excluirLivro(id);
}

async function atualizarLivro(livro) {
  return await livroRepository.atualizarLivros(livro);
}

export default {
  criarLivro,
  retornarLivros,
  retornaLivro,
  excluirLivro,
  atualizarLivro,
};
