const express = require('express');
const porta = 3001

const app = express();


app.get('/', (req, res) => {
    res.write('Utilizando o express');
    res.end();
});

app.listen(porta, () =>{
    console.log("Rodando com sucesso...")
});