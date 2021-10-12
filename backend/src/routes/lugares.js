const { Router } = require('express');
const router = Router();

const { getLugar, crearLugar, modificarLugar, eliminarLugar, get1Lugar  } = require('../controllers/lugares.controller');

router.route('/')
    .get(getLugar)
    .post(crearLugar)
    
    

router.route('/:id')
    .get(get1Lugar)
    .put(modificarLugar)
    .delete(eliminarLugar);
    

module.exports = router;