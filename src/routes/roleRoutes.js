import { criarRoleController } from "../controllers/roleController.js";

export default async function roleRoutes(fastify,options) {
    //Quando alguém fizer um POST em /roles, chama o controller
    fastify.post('/roles',criarRoleController);
    
}