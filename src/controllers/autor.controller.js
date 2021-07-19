import autorService from "../services/autor.service.js";

async function criarAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error(
        "Nome, email e telefone obrigatórios para criação de um autor."
      );
    }
    autor = await autorService.criarAutor(autor);
    res.send(client);
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function retornarAutores(req, res, next) {
  try {
    res.send(await autorService.retornarAutors());
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function retornaAutor(req, res, next) {
  try {
    res.send(await autorService.retornaAutor(req.params.id));
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function excluirAutor(req, res, next) {
  try {
    await autorService.excluirAutor(req.params.id);
    res.end();
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

async function atualizarAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error(
        "AutorId Nome, Email, e Telefone são obrigatórios para Atualização de um autor."
      );
    }
    autor = await autorService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  criarAutor,
  retornarAutores,
  retornaAutor,
  excluirAutor,
  atualizarAutor,
};
