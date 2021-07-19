import express from "express";
import autorController from "../controllers/autor.controller.js";
const router = express.Router();

router.get("/", autorController.retornarAutores);
router.get("/:id", autorController.retornaAutor);
router.post("/", autorController.criarAutor);
router.put("/", autorController.atualizarAutor);
router.delete("/:id", autorController.excluirAutor);

export default router;
