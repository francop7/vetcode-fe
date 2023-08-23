import "./stylePublicidad.css";
import imagenpublicidad from "../../assets/Images/publicidadcomida.png";

const Publicidad = () => {
  return (
    <div className="publicidadDiv mb-5">
      <a href="https://www.google.com">
        <img
          src={imagenpublicidad}
          alt="publicidad paga de la pagina"
          id="imagenpublicidad"
        />
        <button type="button" className="btn btn-primary" id="botonpublicidad">
          Mas info!
        </button>
      </a>
    </div>
  );
};

export default Publicidad;
