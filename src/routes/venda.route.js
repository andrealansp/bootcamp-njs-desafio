import express from "express";
import vendaController from "../controllers/venda.controller.js";
const router = express.Router();

router.get("/", vendaController.retornarVendas);
router.get("/:id", vendaController.retornaVenda);
router.post("/", vendaController.criarVenda);
router.put("/", vendaController.atualizarVenda);
router.delete("/:id", vendaController.excluirVenda);

export default router;
