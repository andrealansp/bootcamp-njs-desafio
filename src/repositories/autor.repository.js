import autorModel from "../models/autor.model.js";

async function inserirAutor(autor) {
  try {
    return await autorModel.create(autor);
  } catch (e) {
    throw e;
  }
}

export default {
  inserirAutor,
};
