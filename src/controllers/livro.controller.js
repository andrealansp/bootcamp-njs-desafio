import livroService from "../services/livro.service.js";

async function criarLivro(req, res, next) {
  try {
    let livro = req.body;
    console.log(livro);
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
      throw new Error(
        "Nome, valor, estoque, telefone e endereço são obrigatórios para criação do livro."
      );
    }
    livro = await livroService.criarLivro(livro);
    res.send(livro);
    logger.info(`POST /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function retornarLivros(req, res, next) {
  try {
    res.send(await livroService.retornarLivros());
    logger.info("GET /livro");
  } catch (err) {
    next(err);
  }
}

async function retornaLivro(req, res, next) {
  try {
    res.send(await livroService.retornaLivro(req.params.id));
    logger.info("GET /livro");
  } catch (err) {
    next(err);
  }
}

async function excluirLivro(req, res, next) {
  try {
    await livroService.excluirLivro(req.params.id);
    res.end();
    logger.info("DELETE /livro");
  } catch (err) {
    next(err);
  }
}

async function atualizarLivro(req, res, next) {
  try {
    let livro = req.body;
    if (
      !livro.livroId ||
      !livro.nome ||
      !livro.valor ||
      !livro.estoque ||
      !livro.autorId
    ) {
      throw new Error(
        "LivroId Nome, valor, estoque, e autorId são obrigatórios para Atualização do livro."
      );
    }
    livro = await livroService.atualizarLivro(livro);
    res.send(livro);
    logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  criarLivro,
  retornarLivros,
  retornaLivro,
  excluirLivro,
  atualizarLivro,
};
