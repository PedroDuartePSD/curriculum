const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('src'));

app.listen(port, () => console.log(`Estou rodando na porta ${port}!`));