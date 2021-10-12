import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class CreateReserva extends Component {

    state = {
        turistas: [],
        lugares: [],
        turistaSel: '',
        lugarSel: '',
        fecha: new Date(),
        editando: false,
        id: ''
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newReserva = {
            turista: this.state.turistaSel,
            lugar: this.state.lugarSel,
            fecha: this.state.fecha
        }
        if (this.state.editando) {
            await axios.put('http://localhost:4000/api/reservas/' + this.state.id, newReserva);
        } else {
            await axios.post('http://localhost:4000/api/reservas', newReserva);
        }

        //console.log(res);
        window.location.href = '/';

    }

    datoChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeFecha = fecha => {
        this.setState({ fecha });
    }

    async componentDidMount() {

        const resT = await axios.get('http://localhost:4000/api/turista');
        const resL = await axios.get('http://localhost:4000/api/lugares');

        this.setState({
            turistas: resT.data.map(turista => turista.nombre),
            lugares: resL.data.map(lugar => lugar.lugar),
            turistaSel: resT.data[0].nombre,
            lugarSel: resL.data[0].lugar
        })
        //console.log(this.state)
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/reservas/' + this.props.match.params.id)
            //console.log(res.data)
            this.setState({
                turistaSel: res.data.turista,
                lugarSel: res.data.lugar,
                editando: true,
                id: this.props.match.params.id,
                fecha: new Date(res.data.fecha)
            })
        }
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>CREAR UNA RESERVA</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <select
                                className="form-control"
                                name="turistaSel"
                                onChange={this.datoChange}
                                value={this.state.turistaSel}
                            >
                                {
                                    this.state.turistas.map(turista => (
                                        <option key={turista} value={turista}>
                                            {turista}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control"
                                name="lugarSel"
                                onChange={this.datoChange}
                                value={this.state.lugarSel}
                            >
                                {
                                    this.state.lugares.map(lugar => (
                                        <option key={lugar} value={lugar}>
                                            {lugar}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group" >
                            <DatePicker className="form-control" selected={this.state.fecha} onChange={this.onChangeFecha} />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            RESERVA
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}
