import "./Cachorros.css";
import Formulario from "../Detallesplancachorros/Formulario";
import CoberturasyServicios from "../Detallesplancachorros/CoberturasyServicios";

const Cachorros = () => {
  return (
    <>
      <div id="contenedorPC" className="container-fluid">
        <h1 className="col-md-4 col-sm-12 text-center text display-6">
          Primeros pasos
        </h1>
        <CoberturasyServicios />
        <Formulario />
      </div>
    </>
  );
};
export default Cachorros;
