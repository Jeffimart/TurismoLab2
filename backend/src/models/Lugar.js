const { Schema, model } = require('mongoose');

const LugarSchema = new Schema({
    lugar: String
});

module.exports = model('Lugar', LugarSchema);