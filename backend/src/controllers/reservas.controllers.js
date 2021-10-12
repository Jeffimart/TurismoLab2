const reservasCtrl = {};

const ReservaModel = require('../models/Reserva');


//GET
reservasCtrl.getReservas = async (req, res) => {
    const reservas = await ReservaModel.find();
    res.json(reservas);
};

//GET 1 reserva
reservasCtrl.getReserva = async (req, res) => {
    const reserva = await ReservaModel.findById(req.params.id);
    res.json(reserva);
}

//POST
reservasCtrl.createReserva = async (req, res) => {
    const { turista, lugar, fecha } = req.body;
    const newReserva = new ReservaModel({
        turista,
        lugar,
        fecha
    });
    await newReserva.save();
    res.json('Nueva reserva added');
};


//DELETE
reservasCtrl.deleteReserva = async (req, res) => {
    await ReservaModel.findByIdAndDelete(req.params.id)
    res.json('Reserva Deleted');
};

//PUT
reservasCtrl.modificarReserva = async (req, res) => {
    const { turista, lugar, fecha } = req.body;
    await ReservaModel.findByIdAndUpdate(req.params.id, {
        turista,
        lugar,
        fecha
    });
    res.json('Reserva Updated');
};

module.exports = reservasCtrl;