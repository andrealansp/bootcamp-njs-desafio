import livroModel from "../models/livro.model.js";
import { livroInfoModel } from "../models/livroinfo.model.js";

async function inserirLivro(livro) {
  try {
    return await livroModel.create(livro);
  } catch (e) {
    throw e;
  }
}

async function retornarLivros() {
  try {
    return await livroModel.findAll({ raw: false });
  } catch (e) {
    throw e;
  }
}

async function retornarLivrosAutores(id) {
  try {
    return await livroModel.findAll({ where: { autorId: id } });
  } catch (e) {
    throw e;
  }
}

async function retornaLivro(id) {
  try {
    return await livroModel.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function atualizarLivros(livro) {
  try {
    await livroModel.update(livro, {
      where: { livroId: livro.livroId },
    });
    return await retornaLivro(livro.livroId);
  } catch (e) {
    throw e;
  }
}

async function excluirLivro(id) {
  try {
    await livroModel.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (e) {
    throw e;
  }
}

async function criarInfo(info) {
  try {
    const modelo = new livroInfoModel(info);
    return await modelo.save();
  } catch (e) {
    throw e;
  }
}
async function atualizarInfo(info) {
  try {
    const modelo = await livroInfoModel(info.livroId, info);
    return modelo;
  } catch (e) {
    throw e;
  }
}
async function excluirInfo(id) {
  try {
    const modelo = await livroInfoModel.findOneAndDelete(
      { livroId: id },
      function (err) {
        if (err) return handleError(err);
        console.log("Sucesso");
      }
    );
  } catch (e) {
    throw e;
  }
}

async function selecionarLivro(livroId) {
  try {
    return await livroInfoModel.find({ livroId: livroId });
  } catch (e) {
    throw e;
  }
}

async function cadastrarAvaliacao(avaliacao, livroId) {
  try {
    const livro = await selecionarLivro(livroId);
    livro[0].avaliacoes.push(avaliacao);
    const filter = { livroId: parseInt(livroId) };
    const update = { avaliacoes: livro[0].avaliacoes };

    const res = await livroInfoModel.findOneAndUpdate(filter, update);
    return res;
  } catch (e) {
    throw e;
  }
}

async function excluirAvaliacao(avaliacaoId, livroId) {
  try {
    const livro = await selecionarLivro(livroId);
    const avaliacoes = livro[0].avaliacoes.filter((e, i) => {
      if (i != avaliacaoId) return e;
    });

    console.log(avaliacoes);
    const filter = { livroId: parseInt(livroId) };
    const update = { avaliacoes: avaliacoes };

    const res = await livroInfoModel.findOneAndUpdate(filter, update);
    return res;
  } catch (e) {
    throw e;
  }
}

export default {
  inserirLivro,
  retornarLivros,
  atualizarLivros,
  retornaLivro,
  excluirLivro,
  criarInfo,
  atualizarInfo,
  excluirInfo,
  cadastrarAvaliacao,
  selecionarLivro,
  excluirAvaliacao,
  retornarLivrosAutores,
};
