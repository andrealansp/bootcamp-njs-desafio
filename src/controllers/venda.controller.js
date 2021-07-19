import clienteService from "../services/cliente.service.js"

async function criarCliente(req, res, next) {
    try {
      let cliente = req.body;
      if (
        !cliente.nome ||
        !cliente.email ||
        !cliente.senha ||
        !cliente.telefone ||
        !cliente.endereco
      ) {
        throw new Error("Name, email, senha, telefone e endereço são obrigatórios para criação do cliente.");
      }
      client = await clienteService.criarCliente(cliente);
      res.send(client);
      logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (err) {
      next(err);
    }
  }
  
  async function retornarClientes(req, res, next) {
    try {
      res.send(await clienteService.retornarClientes());
      logger.info("GET /client");
    } catch (err) {
      next(err);
    }
  }
  
  async function retornaCliente(req, res, next) {
    try {
      res.send(await clienteService.retornaCliente(req.params.id));
      logger.info("GET /client");
    } catch (err) {
      next(err);
    }
  }
  
  async function excluirCliente(req, res, next) {
    try {
      await clienteService.excluirCliente(req.params.id);
      res.end();
      logger.info("DELETE /client");
    } catch (err) {
      next(err);
    }
  }
  
  async function atualizarCliente(req, res, next) {
    try {
      let cliente = req.body;
      if (
        !cliente.nome ||
        !cliente.email ||
        !cliente.senha ||
        !cliente.telefone ||
        !cliente.endereco
      ) {
        throw new Error("ClienteId Nome, email, senha, telefone e endereço são obrigatórios para Atualização do cliente.");
      }
      client = await clientService.updateClient(client);
      res.send(client);
      logger.info(`PUT /client - ${JSON.stringify(client)}`);
    } catch (err) {
      next(err);
    }
  }
  
  export default {
    criarCliente,
    retornarClientes,
    retornaCliente,
    excluirCliente,
    atualizarCliente,
  };
  