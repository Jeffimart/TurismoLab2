const lugaresCtrl = {};

const Lugar = require('../models/Lugar');

//GET
lugaresCtrl.getLugar = async (req, res) => {
    const Lugares = await Lugar.find();
    res.json(Lugares);
};

//GET 1 lugar
lugaresCtrl.get1Lugar = async (req, res) => {
    const unLugar = await Lugar.findById(req.params.id);
    res.json(unLugar);
};

//POST
lugaresCtrl.crearLugar = async (req, res) => {
    const { lugar } = req.body;
    const newLugar = new Lugar({ lugar });
    await newLugar.save();
    console.log(newLugar);
    res.json({ message: 'Lugar guardado' })
};

//PUT
lugaresCtrl.modificarLugar = async (req, res) => {
    const { lugar } = req.body;
    await Lugar.findOneAndUpdate(req.params.id, { lugar });
    res.json({ message: 'Lugar actualizado' });
};

//DELETE
lugaresCtrl.eliminarLugar = async (req, res) => {
    await Lugar.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lugar eliminado' });
};


module.exports = lugaresCtrl;