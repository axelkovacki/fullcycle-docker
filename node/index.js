const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;
const mysql = require('mysql');

const config = {
  host: 'db',
  user: 'root',
  password: 'fullcycle',
  database: 'fullcycle',
};

const connection = mysql.createConnection(config);

function insert() {
  const name = `User: ${Math.random()}`;
  connection.query(`INSERT INTO people (nome) VALUES ('${name}')`);
}

function get(res) {
  const title = `
    <h1>Full Cycle Rocks!</h1>
  `;

  connection.query(`SELECT nome FROM people`, (err, rows) => {
    console.log(err, rows);
    if (!rows) {
      return res.send(title);
    }

    res.send(`${title}
      <ol>
        ${!!rows.length ? rows.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  });
}

function handler(req, res) {
  insert();
  get(res);
}

app.get('/', handler);
app.listen(port, () => console.log('Listening on:', port));