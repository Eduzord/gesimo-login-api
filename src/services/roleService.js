import { criarRoleDb, buscarRolePorNomeDb } from "../repositories/roleRepository.js";

export const criarNovaRole = async (nomeRole) => {
    if (!nomeRole){
        throw new Error("Erro, nome da role é obrigatório");
    }

    // Verifica se já existe uma Role com esse nome no bd
    const roleExistente = await buscarRolePorNomeDb(nomeRole);
    if (roleExistente){
        throw new Error("Já existe essa role cadastrada no banco de dados.")
    }

    // Se passou pelas validações, o repositório salva.
    return await criarRoleDb(nomeRole);

}