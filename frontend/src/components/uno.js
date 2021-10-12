import React, { Component } from 'react'

export default class uno extends Component {
    render() {
        return (
            <div className="col-md-8">
                <div className="row">
                    <div className="card card-body">
                        <h3>Escribe el nombre:</h3>
                        <form >
                            <div className="form-group">
                                <input name="nombre" type="text" className="form-control" />
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <ul className="list-group"> <h3>Lista de Reservas</h3>
                            <li className="list-group-item">Lugar 1</li>
                            <li className="list-group-item">Lugar 2</li>
                            <li className="list-group-item">Lugar 3 </li>
                            <li className="list-group-item">etc</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
