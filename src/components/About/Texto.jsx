import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Images/LogoGris.jpg";
const Texto = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-2 text-center">CONOCE A NUESTRO EQUIPO</h1>
        <div className="col-lg-12 fw-semibold">
          COMPASION | INTEGRIDAD | CONFIANZA
        </div>

        <div className="col-lg-8">
          <p className="TextoAbout blockquote">
            Desde el momento en que entras por la puerta, nuestro personal
            brinda una calidad notable a lo largo de toda tu experiencia.
            Nuestro único deseo es ayudar a su mascota a recibir el tratamiento
            que se merece, y nuestros servicios reflejan eso.
          </p>
        </div>

        <div className="col-lg-4">
          <img id="logo" src={Logo} alt="Logo" fluid />
        </div>
      </div>
    </div>
  );
};

export default Texto;
