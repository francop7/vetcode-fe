import React from "react";
import Gato from "../../assets/Images/GatitoContacto.jpg";

const Panel = () => {
  return (
    <div className="row PanelContacto m-3">
      <div className="col-md-9 m-1 fw-semibold">
        EMPATIA | CALIDAD | SINCERIDAD
      </div>

      <div className="col-md-9">
        <p className="blockquote">
          Nuestro equipo se enorgullece de ofrecer nuestros servicios
          veterinarios a la comunidad de San Miguel de Tucumán, Tucumán. No dude
          en ponerse en contacto con nosotros utilizando uno de los métodos a
          continuación.
        </p>
      </div>

      <div className="col-md-3">
        <img id="logo" src={Gato} alt="Logo" fluid />
      </div>
    </div>
  );
};
export default Panel;
