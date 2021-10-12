import React, { Component } from 'react'
import axios from 'axios'; //Para hacer peticiones en el navegador, no usar fetch, usar biblioteca http (Buenas practicas)
import { Link } from 'react-router-dom'


export default class CreateUser extends Component {

    constructor() {
        super();
        this.state = {
            turistas: [],
            nombre: '',
            ciudad: '',
            editando: false,
            _id: ''

        };
        this.cls = this.cls.bind(this);
        this.add = this.add.bind(this);
        this.onChangeDatos = this.onChangeDatos.bind(this);
    }

    async getTuristas() {
        const res = await axios.get('http://localhost:4000/api/turista');
        this.setState({ turistas: res.data });
    }

    async componentDidMount() {
        this.getTuristas();
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/turista/' + this.props.match.params.id)
            //console.log(res.data)
            this.setState({
                nombre: res.data.nombre,
                ciudad: res.data.ciudad,
                editando: true,
                id: this.props.match.params.id

            })
        }
    };

    //OBTENER DATOS DE DIFERENTES INPUTS
    onChangeDatos(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    //Limpiar inputs
    cls() {
        this.setState({
            nombre: '',
            id: '',
            ciudad: ''
        });
    };

    async add(e) {
        e.preventDefault();
        const newTurista = {
            nombre: this.state.nombre,
            ciudad: this.state.ciudad
        }

        if (this.state.editando) {
            await axios.put('http://localhost:4000/api/turista/' + this.state.id, newTurista);
            this.cls();
        } else {
            await axios.post('http://localhost:4000/api/turista', newTurista);
            this.cls();
        }
        //console.log(res);
        this.getTuristas();

    };

    delete = async (_id) => {
        await axios.delete('http://localhost:4000/api/turista/' + _id);
        this.getTuristas();
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>AGREGA UN TURISTA</h3>
                        <form onSubmit={this.add}>
                            <div className="form-group" style={{ margin: '4px' }}>
                                <input name="nombre" type="text" className="form-control" value={this.state.nombre} onChange={this.onChangeDatos} />
                            </div>
                            <div className="form-group" style={{ margin: '4px' }}>{/*MEJORAR BUENAS PRACTICAS PARA CSS*/}
                                <input name="ciudad" type="text" className="form-control" value={this.state.ciudad} onChange={this.onChangeDatos} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ margin: '4px' }}>
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <table className="table table-ligh">
                        <thead>{/*NO DEJA ESTILIZAR*/}
                            <tr>
                                <th>Nombre</th>
                                <th>Ciudad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.turistas.map(turista => {
                                    return (
                                        <tr key={turista._id}>
                                            <td>{turista.nombre}</td>
                                            <td>{turista.ciudad}</td>
                                            <td>
                                                <button className='btn btn-danger' style={{ margin: '4px' }} onClick={() => this.delete(turista._id)}>Eliminar</button>
                                                <Link className="btn btn-secondary" to={"/edit/user/" + turista._id}>
                                                    Editar
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
