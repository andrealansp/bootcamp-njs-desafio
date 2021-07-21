import vendaService from "../services/venda.service.js";

async function criarVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.valor || !venda.data || !venda.clienteId || !venda.livroId) {
      throw new Error(
        "Valor, Data, ClienteId, LivroId são obrigatórios para criação do venda."
      );
    }
    client = await vendaService.criarVenda(venda);
    res.send(client);
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function retornarVendas(req, res, next) {
  try {
    res.send(await vendaService.retornarVendas());
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function retornaVenda(req, res, next) {
  try {
    res.send(await vendaService.retornaVenda(req.params.id));
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

async function excluirVenda(req, res, next) {
  try {
    await vendaService.excluirVenda(req.params.id);
    res.end();
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

async function atualizarVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.valor || !venda.data || !venda.clienteId || !venda.livroId) {
      throw new Error(
        "VendaId, Valor, Data, ClienteId, LivroId são obrigatórios para atualização da Venda."
      );
    }
    client = await clientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  criarVenda,
  retornarVendas,
  retornaVenda,
  excluirVenda,
  atualizarVenda,
};
