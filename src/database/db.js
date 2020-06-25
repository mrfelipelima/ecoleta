// Importar a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose();

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

// Utilizar o objeto de banco dados para nossas operações

// db.serialize(() => {
//     // Com comandos SQL, iremos:
//     // 1 Criar uma tabela com comandos SQL
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)
//     // // 2 Inserir dados na tabela
//     // const query = `
//     // INSERT INTO places (
//     //     image, name, address, address2, state, city, items
//     // ) VALUES (?,?,?,?,?,?,?);
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     //     "Paperside",
//     //     "Barão de Capanema, Centro",
//     //     "Nº 100",
//     //     "Capanema",
//     //     "Pará",
//     //     "Papéis e papelões"
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log('Dados cadastrados com sucesso')
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

//     // 3 Consultar os dados da tabela

//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log('Aqui estão seus registros');
//     //     console.log(rows);
//     // })

//     // 4 Deletar um dado da tabela

//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log('Registro deletado');
//     // });
// });

module.exports = db;