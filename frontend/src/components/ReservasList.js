import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class ReservasList extends Component {

    state = {
        reservas: []
    }

    borrarReserva = async (id) => {
        await axios.delete('http://localhost:4000/api/reservas/' + id);
        this.getReservas();
    }

    async getReservas() {
        const resR = await axios.get('http://localhost:4000/api/reservas');
        //console.log(res);
        this.setState({
            reservas: resR.data
        })
    }
    componentDidMount() {
        this.getReservas();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.reservas.map(reserva => (
                        <div className="col-md-4 p-2" key={reserva._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{reserva.lugar}</h5>
                                    <Link className="btn btn-secondary" to={"/edit/reserva/" + reserva._id}>
                                        Editar
                                    </Link>
                                </div>
                                <div className="card-body">
                                    {/*<p>{reserva._id}</p>*/}
                                    <p>{reserva.turista}</p>
                                    <p>{format(reserva.fecha)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.borrarReserva(reserva._id)}>
                                        Borrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
