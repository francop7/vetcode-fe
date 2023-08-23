import React from "react";
import { Card } from "react-bootstrap";
import FVilla from "../../assets/Images/Franco.png";
import Javier from "../../assets/Images/Javier.png";
import Gonzalo from "../../assets/Images/Gonzalo.png";
import Valentina from "../../assets/Images/Valentina.png";
import FPaz from "../../assets/Images/FrancoP.png";
const Cards = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Card className="bg-body-secondary m-1">
          <Card.Img className="cardsAbout" src={FPaz} alt="Franco" fluid />
          <Card.Text>PAZ, FRANCO.</Card.Text>
          <Card.Text>ESPECIALISTA ONCOLOGICO.</Card.Text>
        </Card>
      </div>
      <div className="col-md-4">
        <Card className="bg-body-secondary m-1">
          <Card.Img src={Valentina} alt="Valentina" fluid />
          <Card.Text>SALVATIERRA BARRAZA, VALENTINA.</Card.Text>
          <Card.Text>ESPECIALISTA EN TRAUMATOLOGIA.</Card.Text>
        </Card>
      </div>
      <div className="col-md-4">
        <Card className="bg-body-secondary m-1">
          <Card.Img className="cardsAbout" src={FVilla} alt="Franco" fluid />
          <Card.Text>VILLAFAÑEZ, FRANCO.</Card.Text>
          <Card.Text>ESPECIALISTA DERMATOLOGICO.</Card.Text>
        </Card>
      </div>
      <div className="col-md-4">
        <Card className="bg-body-secondary m-1">
          <Card.Img className="cardsAbout" src={Gonzalo} alt="Gonzalo" fluid />
          <Card.Text>MANZANO, GONZALO.</Card.Text>
          <Card.Text>ESPECIALISTA EXOTICO.</Card.Text>
        </Card>
      </div>
      <div className=" d-flex align-self-center col-md-4">
        <h3 className="text-center">GRACIAS A NUESTROS VETERINARIOS</h3>
      </div>
      <div className="col-md-4">
        <Card className="bg-body-secondary m-1">
          <Card.Img src={Javier} alt="Javier" fluid />
          <Card.Text>HERRERA, JAVIER.</Card.Text>
          <Card.Text>ESPECIALISTA EN DERMATOLOGICO.</Card.Text>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
