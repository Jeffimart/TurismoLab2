import React, { Component } from 'react'
import axios from 'axios'

export default class CreateLugar extends Component {

    state = {
        lugar: '',
        lugares: []
    }

    async componentDidMount() {
        this.getLugares();
    }

    getLugares = async () => {
        const res = await axios.get('http://localhost:4000/api/lugares');
        this.setState({
            lugares: res.data
        });
    }

    onChangeLugar = e => {
        this.setState({
            lugar: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/lugares', {
            lugar: this.state.lugar
        });
        this.setState({ lugar: '' });
        this.getLugares();
    }

    deleteLugar = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/lugares/' + userId);
            this.getLugares();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>AGREGA UN LUGAR</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group" style={{ margin: '4px' }}>
                                <input name="lugar" type="text" className="form-control" value={this.state.lugar} onChange={this.onChangeLugar} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ margin: '4px' }}>
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">

                    <h3>LUGARES</h3>
                    <ul className="list-group">
                        {
                            this.state.lugares.map(lugar => (
                                <li className="list-group-item list-group-item-action" key={lugar._id} onDoubleClick={() => this.deleteLugar(lugar._id)}>
                                    {lugar.lugar}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
