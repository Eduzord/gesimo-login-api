import prisma from '../plugins/db.js'

export const criarRoleDb = async (nomeRole) => {
    // Forçando o nome a ficar em maiúsculas para manter um padrão
    return await prisma.role.create({
        data:{
            nome: nomeRole.toUpperCase()
        }
    });
};

export const buscarRolePorNomeDb = async(nomeRole) => {
    return await prisma.role.findUnique({
        where: {
            nome: nomeRole.toUpperCase()
        }
    });
};