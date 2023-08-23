import React from "react";
import Panel from "../../components/Contact/Panel";
import Forms from "../../components/Contact/Forms";
import Info from "../../components/Contact/Info";
import Contactanos from "../../components/Contact/Contactanos";
import "../../components/Contact/Contacto.css";

const ContactPage = () => {
  return (
    <div id="containerContact" className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <Panel />
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-md-4">
          <Info />
          <Contactanos />
        </div>
        <div className="col-md-6">
          <Forms />
        </div>
      </div>
      <div className="row d-flex justify-content-center m-3">
      <h3 className="text-center m-3">Nuestra Direccion en Google Maps</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56957.983502570954!2d-65.27913955136717!3d-26.843960599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225bf7f7797119%3A0xb474a29bb00e67d4!2sVeterinaria%20Espacio%20Animal!5e0!3m2!1ses-419!2sar!4v1692045738200!5m2!1ses-419!2sar"
        width="400px"
        height="300px"
      ></iframe>
      
      </div>
    
    </div>
  );
};
export default ContactPage;
