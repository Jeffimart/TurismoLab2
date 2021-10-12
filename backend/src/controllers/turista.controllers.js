const turistaCtrl = {};

const UserTurista = require('../models/Turista');


//GET
turistaCtrl.getUser = async (req, res) => {
    const Turistas = await UserTurista.find();
    res.json(Turistas);
};


//POST
turistaCtrl.createUser = async (req, res) => {
    const { nombre, ciudad } = req.body;
    const newTurista = new UserTurista({ nombre, ciudad });
    await newTurista.save();
    console.log(newTurista);
    res.json({ message: 'Turista guardado' });
};


//DELETE
turistaCtrl.deleteUser = async (req, res) => {
    await UserTurista.findByIdAndDelete(req.params.id);
    res.json({ message: 'Turista eliminado' });
};

//UPDATE

turistaCtrl.updateUser = async (req, res) => {
    const { nombre, ciudad } = req.body;
    await UserTurista.findByIdAndUpdate(req.params.id, {
        nombre,
        ciudad
    });
    res.json('Turista actualizado');
}

//GET 1 turista
turistaCtrl.get1User = async (req, res) => {
    const user = await UserTurista.findById(req.params.id);
    res.json(user);
}

module.exports = turistaCtrl;