const express = require('express');
const cors =  require('cors');
const app = express();

//Settings
app.set('port',4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/turista', require('./routes/turista'));
app.use('/api/lugares', require('./routes/lugares'));
app.use('/api/reservas', require('./routes/reservas'));

module.exports = app;