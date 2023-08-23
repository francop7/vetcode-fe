import { Link } from "react-router-dom";
import ErrorImg from "../../assets/Images/error404.png";
import './error404.css'

const Error404 = () => {
  return (
    <div className="bgBody ">
      <div className="text-center container">
        <img src={ErrorImg} alt="Error404" className="w-50"  />
        <h1>
          LO SENTIMOS ESTA PAGINA AUN NO FUE CREADA
        </h1>
        <span>
          <Link
            to="/"
            className="link my-3 text-center fw-bold fs-1 text-color "
          >
            Volver al Inicio
          </Link>
        </span>
      </div>
      
    </div>
  );
};

export default Error404;
