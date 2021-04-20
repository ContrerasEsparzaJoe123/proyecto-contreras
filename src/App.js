import "./App.css";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Ayuda from "./components/Ayuda";
import Servicios from "./components/Servicios";
import Ubicacion from "./components/Ubicacion";
import Nosotros from "./components/Nosotros";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carusel from "./components/Carusel";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <div className="row justify-content-center align-items-center minh-100">
          <div className="btn-group">
            <Link to="/" className="btn btn-info">
              Inicio
            </Link>
            <Link to="/login" className="btn btn-info">
              Login
            </Link>
            <Link to="/servicios" className="btn btn-info">
              Servicios
            </Link>
            <Link to="/nosotros" className="btn btn-info">
              Nosotros
            </Link>
            <Link to="/ubicacion" className="btn btn-info">
              Ubicacion
            </Link>
            <Link to="/ayuda" className="btn btn-info">
              Ayuda
            </Link>
            <Link to="/contacto" className="btn btn-info">
              Contacto
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/" exact>
            <center>
              <h1>Este es el root</h1>
              <Carusel />
              
            </center>
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/ubicacion" exact component={Ubicacion} />
          <Route path="/ayuda" exact component={Ayuda} />
          <Route path="/contacto" exact component={Contacto} />
        </Switch>{" "}
      </div>
    </Router>
  );
}

export default App;
