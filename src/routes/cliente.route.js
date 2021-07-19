import express from "express"
import clienteController from "../controllers/cliente.controller.js"
const router = express.Router()

router.get('/', clienteController.retornarClientes)
router.get('/:id', clienteController.retornaCliente)
router.post('/', clienteController.criarCliente)
router.put('/', clienteController.atualizarCliente)
router.delete('/:id', clienteController.excluirCliente)


export default router
