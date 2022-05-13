const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cardapio = require('./src/cardapio.json');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends: false}));
app.use(express.json());
app.use(cors());

// Buscar dados
app.get('/',(req, res) => {
    return res.json(cardapio);
});

// Inserir dados
app.post('/add', (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).end();
    }

    cardapio.push(body);
    return res.json(body);
});

app.listen(21262, () =>{
    console.log(`Express started at http://localhost:21262`)
});