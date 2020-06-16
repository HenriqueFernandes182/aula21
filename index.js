const express = require('express');

const server = express();

//variaveis
let number1;
let number2;

server.use(express.json());

server.get('/', (req,res) =>{
    return res.json({
        result: 'Bem vindo a calculadora'
    });
}),

server.post('/numbers', (req, res) =>{
    number1 = req.body.number1;
    number2 = req.body.number2;

    return res.json({
        result:'dados resebidos com sucesso',
        number1,
        number2
    });
})

server.get('/soma', (req,res) =>{
    const resultado = number1 + number2;

    return res.json({resultado});
})

server.get('/sub', (req,res) =>{
    const resultado = number1 - number2;

    return res.json({resultado});
})

server.get('/multi', (req,res) =>{
    const resultado = number1 * number2;

    return res.json({resultado});
})


server.get('/div', (req,res) =>{
    const resultado = number1 / number2;

    return res.json({resultado});
})

server.put('/numbers', (req, res) => {
    number1 = req.body.number1;
    number2 = req.body.number2;

    return res.json({
        result: 'Numeros atualizados com Sucesso'
    });

})


server.listen(3000);