
import "./styleFooter.css";
import logodepagina from "../../assets/Images/logoicono.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="row container-fluid " id="footer">
      <div className="col-sm-12 col-md-4 col-lg-3 text-center">
        <ul>
          <h3 className="mt-5 text-dark">Nosotros</h3>
          <li>
            <Link to="/Nosotros">Quienes somos</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
          <li>
            <Link to="*">Productos</Link>
          </li>
          <li>
            <Link to="*">Medicos</Link>
          </li>
          <li>
            <Link to="*">Direccion</Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-3 text-center">
        <ul>
          <h3 className="mt-5">Ayuda</h3>
          <li>
            <Link to="*">¿Cómo comprar?</Link>
          </li>
          <li>
            <Link to="*">Preguntas frecuentes</Link>
          </li>
          <li>
            <Link to="*">Terminos y Condiciones</Link>
          </li>
          <li>
            <Link to="*">Politicas de devolucion</Link>
          </li>
          <li>
            <Link to="*">Planes Sociales</Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center">
        <Link to="/" className="iconoA">
          <img
            className="w-75"
            src={logodepagina}
            alt="logo de la pagina"
            id="imagenlogodefooter"
          />
        </Link>
      </div>
      <div className="copyrightFooter">
        <h6 className="copyrightFooterText">©2023-VetCode todos los derechos reservados.</h6>
        <div className="iconosFooter">
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
