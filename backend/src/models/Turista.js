const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    ciudad: String
    /*reservas: [{
        type: Schema.Types.ObjectId,
        ref: 'Reserva'
    }]*/
});

//coleccion Turista
module.exports = model('Turista', userSchema);