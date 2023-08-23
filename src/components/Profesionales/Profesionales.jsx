import { Card, Image } from "react-bootstrap";
import prof1 from "../../assets/Images/vet-code profesional.jpg";
import prof2 from "../../assets/Images/vet-code profesional-2.jpg";

import "./profesionales.css";

const Profesionales = () => {
  return (
    <div className=" container-fluid p-3 bodyBg ">
      <div className="d-flex p-5 justify-content-center">
        <h1>NUESTROS PROFESIONALES</h1>
      </div>
      <div className="row justify-content-around ">
        <Card className="col-12 col-md-4 my-3 fw-bold bodyBgprof prof-cards">
          <Image variant="top" roundedCircle height="500"  className="p-2" src={prof1} />
          <Card.Body>
            <Card.Title>DRA. JUANA CARRASCO</Card.Title>
            <Card.Text>
              CUENTA CON MAS DE 7 AÑOS DE EXPERIENCIA EN EL AREA DE ONCOLOGIA.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-12 col-md-4 my-3 bodyBgprof fw-bold prof-cards ">
          <Image variant="top" height="500" roundedCircle className="p-2 " src={prof2} />
          <Card.Body>
            <Card.Title>DR. JOHN DOLITTLE</Card.Title>
            <Card.Text>
              CUENTA CON MAS DE 4 AÑOS DE EXPERIENCIA EN EL AREA DE CIRUGIA CARDIACA.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profesionales;
