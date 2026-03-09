import prisma from '../plugins/db.js'

export const criarRole = async (nomeRole) => {
    // Forçando o nome a ficar em maiúsculas para manter um padrão
    return await prisma.role.crate({
        data:{
            nome: nomeRole.toUpperCase()
        }
    });
};

export const buscarRolePorNome = async(nomeRole) => {
    return await prisma.role.findUnique({
        where: {
            nome: nomeRole.toUpperCase
        }
    });
};