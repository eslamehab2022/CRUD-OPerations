import express from 'express';
import appInait from './app.routes.js';
import connection from './DB/connection.js';
const app = express()
const port = 3000;
connection();

appInait(app, express);

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))