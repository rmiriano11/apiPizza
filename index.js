const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends: false}));
app.use(express.json());
app.use(cors());

let db = [
    {id: '1', Nome: 'Frango com Requeijão', Decrição: 'Frango desfiado, cebola, oregano e requeijão', Preço: 'R$43,00', Quantidade: 0},
    {id: '2', Nome: 'Bauru', Descrição: 'Mussarela, presunto, requeijão, oregano e tomate', Preço: 'R$39,00', Quantidade: 0},
    {id: '3', Nome: 'Calabresa', Descrição: 'Mussarela, calabresa, oregano e cebola', Preço: 'R$38,00', Quantidade: 0},
    {id: '4', Nome: 'Aliche', Descrição: 'Filé de aliche, cebola e mussarela', Preço:'R$42,00', Quantidade: 0},
    {id: '5', Nome: 'Alemã', Descrição: 'Mussarela, calabresa, bacon e cebola', Preço:'R$42,00', Quantidade: 0},
    {id: '6', Nome: 'Americana', Descrição: 'Mussarela, calabresa, palmito e bacon', Preço:'R$42,00', Quantidade: 0},
    {id: '7', Nome: 'A moda da casa', Descrição: 'Frango, cheddar, palmito, milho, bacon e mussarela', Preço:'R$46,00', Quantidade: 0},
    {id: '8', Nome: 'A moda do chefe', Descrição: 'Mussarela, presunto, cheddar, tomate, bacon e parmesão', Preço:'R$44,00', Quantidade: 0},
    {id: '9', Nome: 'A moda do pescador', Descrição: 'Mussarela, atum sólido, catupiry, bacon e parmesão', Preço:'R$54,00', Quantidade: 0},
    {id: '10', Nome: 'A moda do pizzaiolo', Descrição: 'Lobinho, milho, requeijão, bacon, pamesão e catupiry', Preço:'R$47,00', Quantidade: 0},
    {id: '11', Nome: 'Aquarela', Descrição: 'Mussarela, palmito e presunto', Preço:'R$44,00', Quantidade: 0},
    {id: '12', Nome: 'Baiana', Descrição: 'Calabresa moida, cebola, pimenta e ovos', Preço:'R$38,00', Quantidade: 0},
    {id: '13', Nome: 'Baiacatu', Descrição: 'Calabresa moida com catupiry', Preço:'R$42,00', Quantidade: 0},
    {id: '14', Nome: 'Caprichosa', Descrição: 'Frango, milho, requijão, catupiry, bacon e parmesão', Preço:'R$46,00', Quantidade: 0},
    {id: '15', Nome: 'Carne seca', Descrição: 'Mussarela, brocolis, palmito e carne seca', Preço:'R$48,00', Quantidade: 0},
    {id: '16', Nome: 'Caipira', Descrição: 'Frango desfiado, milho, palmito, catupiry e mussarela', Preço:'R$46,00', Quantidade: 0},
    {id: '17', Nome: 'Cream cheese', Descrição: 'Cream cheese, peito de peru, milho e tomate cereja', Preço:'R$44,00', Quantidade: 0},
    {id: '18', Nome: 'Grega', Descrição: 'Ovos, mussarela, cebola, palmito e ervilha', Preço:'R$42,00', Quantidade: 0},
    {id: '19', Nome: 'Gênova', Descrição: 'Mussarela, atum sólido, palmito, ervilha e milho', Preço:'R$51,00', Quantidade: 0},
    {id: '20', Nome: 'Jardineira', Descrição: 'Atum sólido, milho, mussarela ou catupiry', Preço:'R$51,00', Quantidade: 0},
    {id: '21', Nome: 'Laporella', Descrição: 'Mussarela de búfala, tomate seco, rúcula, molho italiano, oregano e azeitonas', Preço:'R$51,00', Quantidade: 0},
    {id: '22', Nome: 'Portuguesa', Descrição: 'Ovos, cebola, presunto, ervilha, palmito e mussarela', Preço:'R$44,00', Quantidade: 0},
]

// Buscar dados
app.get('/',(req, res) => {
    return res.json(db);
});

// Inserir dados
app.post('/add', (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).end();
    }

    db.push(body);
    return res.json(body);
});

app.listen(21262, () =>{
    console.log(`Express started at http://localhost:21262`)
});