import "./Adultos.css";
import React from "react";
import Formulario from "../Detallesplancachorros/Formulario";
import CoberturasyServicios from "../Detallesplancachorros/CoberturasyServicios";

const Adultos = () => {
  return (
    <>
      <div id="contenedorPA" className="container-fluid">
        <h1 className="col-md-4 col-sm-12 text-center text display-6">
          {" "}
          Adultos
        </h1>
        <CoberturasyServicios />
        <Formulario />
      </div>
    </>
  );
};
export default Adultos;
