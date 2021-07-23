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
    if (!req.query) {
    }
    res.send(await livroService.retornarLivros(req.query.autorId));
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

    if (livro.livroId && livro.valor && Object.keys(livro).length === 2) {
      livro = await livroService.atualizarLivro(livro);
      res.send(livro);
      logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
    } else {
      throw new Error(
        "Somente livroId e valor são aceitos na atualização do livro."
      );
    }
  } catch (err) {
    next(err);
  }
}

async function criarInfo(req, res, next) {
  try {
    let info = req.body;
    console.log(info);
    if (!info.livroId || !info.descricao || !info.paginas || !info.editora) {
      throw new Error(
        "Nome, valor, estoque, telefone e endereço são obrigatórios para criação do livro."
      );
    }
    info = await livroService.criarInfo(info);
    res.send(info);
    logger.info(req.method + "/livro/info:" + `${JSON.stringify(info)}`);
  } catch (err) {
    next(err);
  }
}

async function atualizarInfo(req, res, next) {
  try {
    let info = req.body;
    console.log(info);
    if (!info.livroId || !info.descricao || !info.paginas || !info.editora) {
      throw new Error(
        "Nome, valor, estoque, telefone e endereço são obrigatórios para criação do livro."
      );
    }
    info = await livroService.criarInfo(info);
    res.send(info);
    logger.info(req.method + "/livro/info:" - `${JSON.stringify(info)}`);
  } catch (err) {
    next(err);
  }
}

async function excluirInfo(req, res, next) {
  try {
    await livroService.excluirInfo(req.params.id);
    res.end();
    logger.info(req.method + "/livro/info:");
  } catch (err) {
    next(err);
  }
}

async function cadastrarAvaliacao(req, res, next) {
  try {
    let livroId = req.params.id;
    let avaliacao = req.body;
    if (!avaliacao.nome || !avaliacao.nota || !avaliacao.avaliacao) {
      throw new Error(
        "Nome, nota e avaliacao são obrigatórios para criação da avaliacao."
      );
    }
    avaliacao = await livroService.cadastrarAvaliacao(avaliacao, livroId);
    res.send(avaliacao);
    logger.info(
      req.method + "/livro/avaliacao:" + `${JSON.stringify(avaliacao)}`
    );
  } catch (err) {
    next(err);
  }
}

async function excluirAvaliacao(req, res, next) {
  try {
    const avaliacaoId = req.params.idAvaliacao;
    const livroId = req.params.id;
    const avaliacao = await livroService.excluirAvaliacao(avaliacaoId, livroId);
    res.send(avaliacao);
    logger.info(
      req.method + "/livro/avaliacao:" + `${JSON.stringify(avaliacao)}`
    );
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
  criarInfo,
  excluirInfo,
  atualizarInfo,
  cadastrarAvaliacao,
  excluirAvaliacao,
};
