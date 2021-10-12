const { Router } = require('express');
const router = Router();

const { getReservas, getReserva, createReserva, deleteReserva, modificarReserva } = require('../controllers/reservas.controllers');

router.route('/')
    .get(getReservas)
    .post(createReserva);

router.route('/:id')
    .get(getReserva)
    .delete(deleteReserva)
    .put(modificarReserva);


module.exports = router;