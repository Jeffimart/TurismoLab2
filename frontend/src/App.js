import { BrowserRouter as BRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './components/Navigation';
import CreateLugar from './components/CreateLugar';
import CreateUser from './components/CreateUser';
import ReservasList from './components/ReservasList';
import CreateReserva from './components/CreateReserva';
import Consultas from './components/Consultas'

function App() {
  return (
    <BRouter>
      <Navegacion />
      <div className="container p-4">
        <Route exact path="/" component={ReservasList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/edit/user/:id" component={CreateUser} />
        <Route path="/lugar" component={CreateLugar} />
        <Route path="/edit/lugar/:id" component={CreateLugar} />
        <Route path="/reservar" component={CreateReserva} />
        <Route path="/edit/reserva/:id" component={CreateReserva} />
        <Route path="/consultar/" component={Consultas}></Route>
      </div>
    </BRouter>
  );
}

export default App;
