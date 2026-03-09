import app from './index.js'
// Função para iniciar o servidor
const port = 3000


try {
    await app.listen({port: port, host: '0.0.0.0'}, () => {
        console.log(`Serividor rodando em http://localhost:${port}`)
    });
    
} catch (e) {
    app.log.error(e);
    process.exit(1);
}



