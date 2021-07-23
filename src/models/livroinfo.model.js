import mongoose from "mongoose";

const livroInfoSchema = new mongoose.Schema({
  livroId: { type: Number, autoIndex: true, required: true },
  descricao: { type: String, required: true },
  paginas: { type: Number, required: true },
  editora: { type: String, required: true },
  avaliacoes: [{ nome: String, nota: Number, avaliacao: String }],
});

const livroInfoModel = mongoose.model(
  "livroinfo",
  livroInfoSchema,
  "livroinfo"
);
livroInfoModel;

export { livroInfoModel };
