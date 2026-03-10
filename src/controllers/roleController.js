import { criarNovaRole } from "../services/roleService.js";

export const criarRoleController = async (req, res)=> {
try{
    const {nome} = req.body;

    const novaRole = await criarNovaRole(nome);

    //Devolve status 201 (Created) e a role criada
    return res.status(201).send(novaRole);
} catch (error){
    // Se der qualquer erro no Service, cai aqui e devolve 400 Bad Request
    return res.status(400).send({erro: error.message});
}



};