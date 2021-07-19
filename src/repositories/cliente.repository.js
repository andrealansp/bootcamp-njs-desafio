import clienteModel from "../models/cliente.model.js";

async function inserirCliente(cliente){
    try{
        return await clienteModel.create(cliente);
    }catch(e){
        next(e)
    }
}

async function retornarClientes(){
    try{
        return await clienteModel.findAll();
    }catch(e){
        next(e)
    }
}

export default {
    inserirCliente
}