const { Schema, model } = require('mongoose');

const ReservaSchema = new Schema({
    turista: String,
    lugar: String,
    fecha: Date
});


module.exports = model('Reserva', ReservaSchema);