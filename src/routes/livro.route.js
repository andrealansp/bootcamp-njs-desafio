import express from "express";
import livroController from "../controllers/livro.controller.js";
const router = express.Router();

router.get("/", livroController.retornarLivros);
router.get("/:id", livroController.retornaLivro);
router.post("/", livroController.criarLivro);
router.put("/", livroController.atualizarLivro);
router.delete("/:id", livroController.excluirLivro);
router.post("/info", livroController.criarInfo);
router.put("/info", livroController.atualizarInfo);
router.delete("/info/:id", livroController.excluirInfo);
router.post("/:id/avaliacao", livroController.cadastrarAvaliacao);
router.delete("/:id/avaliacao/:idAvaliacao", livroController.excluirAvaliacao);

export default router;
