import express from "express";
import livroController from "../controllers/livro.controller.js";
const router = express.Router();

router.get("/", livroController.retornarLivros);
router.get("/:id", livroController.retornaLivro);
router.post("/", livroController.criarLivro);
router.put("/", livroController.atualizarLivro);
router.delete("/:id", livroController.excluirLivro);

export default router;
