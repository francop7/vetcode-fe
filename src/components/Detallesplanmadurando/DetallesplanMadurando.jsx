import "./DetallesplanMadurando.css";
import React from "react";
import Formulario from "../Detallesplancachorros/Formulario";
import CoberturasyServicios from "../Detallesplancachorros/CoberturasyServicios";


const DetallesplanMadurando = () => {
  return (
    <>
      <div id="contenedorPM" className="container-fluid">
        <h1 className="col-md-4 col-sm-12 text-center text display-6">
          {" "}
          Madurando
        </h1>
        <CoberturasyServicios />
        <Formulario />
      </div>
    </>
  );
};
export default DetallesplanMadurando;
