import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto"> {/*PROBLEMA CON EL ml-auto investigar*/}
              <li className="nav-item">
                <Link className="nav-link" to="/user">Turistas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lugar">Lugares</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservar">Reservas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/consultar">Consultas</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
