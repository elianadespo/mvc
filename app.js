const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/main')

/* recursos estaticos*/
app.use(express.static('public'))

/* configuracion de vistas*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use('/', mainRouter);

app.listen(3030, () => console.log('Servidor funcionando'));
