import autorRepository from "../repositories/autor.repository.js"

async function criarAutor(autor) {
    return await autorRepository.inserirAutor(autor);
  }
  
  async function retornarAutores(autor) {
    
  }
  
  async function retornaAutor(autor) {
    
  }
  
  async function excluirAutor(autor) {
   
  }
  
  async function atualizarAutor(autor) {

  }
  
  export default {
    criarAutor,
    retornarAutores,
    retornaAutor,
    excluirAutor,
    atualizarAutor,
  };
  