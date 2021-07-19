import autorModel from "../models/autor.model.js";

async function inserirCliente(autor){
    try{
        return await clienteModel.create(autor);
    }catch(e){
        next(e)
    }
}

export default {
    inserirCliente
}