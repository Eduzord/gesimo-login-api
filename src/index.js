import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const app = fastify()

app.get('/', (req, res) => {
    res.send('<h1>Hello world!!!</h1>')
})

export default app