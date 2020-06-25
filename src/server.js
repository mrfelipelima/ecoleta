const express = require('express');

const server = express();

// Pegar o banco de dados

const db = require('./database/db');

// Utilizando template engine

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configurar pasta pública
server.use(express.static('public'));

// Habilitar a leitura do corpo das requisições no servidor

server.use(express.urlencoded({ extended: true }));

// Rotas oara renderiar as páginas

server.get('/', (req, res) => {
    return res.render('index.html')
});

server.get('/create-point', (req, res) => {
    return res.render('create-point.html')
});

server.post('/create-point', (req, res) => {
    
    const query = `INSERT INTO places (image, name, address, address2, state, city, items)
    VALUES (?,?,?,?,?,?,?);`;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send('Erro no cadastro')
        }
        console.log('Dados cadastrados com sucesso')
        console.log(this)
        return res.render('/create-point', { saved: true })
    }

    db.run(query, values, afterInsertData)

})

server.get('/search-results', (req, res) => {
    // Pegar os dados do banco de dados

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        const total = rows.length
        return res.render('search-results.html', { places: rows, total });
    });
});

// Inicia o servidor na porta 3000

server.listen(3000);