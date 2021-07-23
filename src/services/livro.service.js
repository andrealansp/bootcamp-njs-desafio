import livroRepository from "../repositories/livro.repository.js";

async function criarLivro(livro) {
  return await livroRepository.inserirLivro(livro);
}

async function retornarLivros(autorId) {
  return await livroRepository.retornarLivros(autorId);
}

async function retornaLivro(id) {
  const livro = await livroRepository.retornaLivro(id);
  const livroInfo = await livroRepository.selecionarLivro(id);
  console.log(livroInfo);
  const dadosLivro = livro.concat(livroInfo);
  return dadosLivro;
}

async function excluirLivro(id) {
  return await livroRepository.excluirLivro(id);
}

async function atualizarLivro(livro) {
  return await livroRepository.atualizarLivros(livro);
}

async function criarInfo(info) {
  return await livroRepository.criarInfo(info);
}

async function atualizarInfo(info) {
  return await livroRepository.atualizarInfo(info);
}

async function excluirInfo(id) {
  return await livroRepository.excluirInfo(id);
}

async function cadastrarAvaliacao(avaliacao, livroId) {
  return await livroRepository.cadastrarAvaliacao(avaliacao, livroId);
}

async function excluirAvaliacao(avaliacaoId, livroId) {
  return await livroRepository.excluirAvaliacao(avaliacaoId, livroId);
}

export default {
  criarLivro,
  retornarLivros,
  retornaLivro,
  excluirLivro,
  atualizarLivro,
  criarInfo,
  atualizarInfo,
  excluirInfo,
  cadastrarAvaliacao,
  excluirAvaliacao,
};
