import React from "react";
import Map from "./Mapbox";



class Ubicacion extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>Componente de Ubicacion</h1>
          <Map/>
        </center>
      </div>
    );
  }
}

export default Ubicacion;
