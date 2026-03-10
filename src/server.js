import app from './index.js'
import roleRoutes from './routes/roleRoutes.js';
// Função para iniciar o servidor
const port = 3000

app.register(roleRoutes);

try {
    await app.listen({port: port, host: '0.0.0.0'}, () => {
        console.log(`Serividor rodando em http://localhost:${port}`)
    });
    
} catch (e) {
    app.log.error(e);
    process.exit(1);
}



