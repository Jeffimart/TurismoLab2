const { Router } = require('express');
const router = Router();

const { getUser, createUser, deleteUser, updateUser, get1User } = require('../controllers/turista.controllers')

router.route('/')
    .get(getUser)
    .post(createUser);

router.route('/:id')
    .get(get1User)
    .put(updateUser)
    .delete(deleteUser);


module.exports = router;