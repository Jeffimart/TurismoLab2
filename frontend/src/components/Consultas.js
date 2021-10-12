import React, { Component } from 'react'
import Uno from './uno'

export default class Consultas extends Component {





    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h3>ESCOJA SU CONSULTA</h3>
                    <div class="btn-group-vertical">
                        <h5>Saber cuantas personas hay en una playa</h5>
                        <button className="btn btn-primary">
                            Consultar
                        </button>
                        <h5>Cual es el sitio más visitado</h5>
                        <button className="btn btn-primary">
                            Consultar
                        </button>
                        <h5>Cuantas personas por ciudad reservan</h5>
                        <button className="btn btn-primary">
                            Consultar
                        </button>
                    </div>
                </div>
                <Uno />
            </div>
        )
    }
}
