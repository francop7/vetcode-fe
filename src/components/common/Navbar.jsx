import { Nav, Container, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navegacion = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const handleLogOut = ()=>{
    localStorage.removeItem('token')
    navigate('/Login')
  }
  return (
    <Navbar expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="imagenLogo"></img>
        </Navbar.Brand>
        <Navbar.Toggle area-aria-controls="basic-navbar-var"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-var">
          <Nav className="ms-auto linksNavbar">
            {token && (
              <Link className="mx-2" to="/Admin">
                <i className="bi bi-shield-plus mx-1"></i>Administrador
              </Link>
            )}
            <Link className="mx-2" to="/">
              <i className="bi bi-house mx-1 mx-1"></i>Inicio
            </Link>
            <Link className="mx-2" to="/Nosotros">
              <i className="bi bi-info-circle mx-1"></i>Sobre Nosotros
            </Link>
            <Link className="mx-2" to="/Contacto">
              <i className="bi bi-envelope-plus mx-1"></i>Contacto
            </Link>
            {!token && (
              <Link className="mx-2" to="/Login">
                <i className="bi bi-person-circle mx-1"></i>Ingresar
              </Link>
            )}
            {token && (
              <Link className="mx-2" onClick={handleLogOut }>
                <i className=" mx-1"></i>Cerrar sesion
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
