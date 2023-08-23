import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cardPlanes.css";
import PrimerosPasos from "../../assets/Images/PrimerosPasoscard.jpg";
import Madurando from "../../assets/Images/MadurandoCard.jpg";
import Adultos from "../../assets/Images/Adultocard.jpg";


const CardPlanes = () => {
  return (
    <div className="container-fluid planesBody py-3 ">
      <div className="d-flex justify-content-center">
        <h1>Conoce nuestros planes pensados para tus mascotas</h1>
      </div>
      <div className="row justify-content-around mt-5 mb-5 ">
        <div className="col-sm-12 col-md-5 col-lg-3 p-0 mt-3 ">
          <Card className="w-100 ">
            <Card.Img height={300} variant="top" src={PrimerosPasos} />
            <Card.Body className="bodyCard ">
              <Card.Title>PRIMEROS PASOS (0-5 AÑOS)</Card.Title>
              <Card.Text>
                El plan perfecto para acompañar los primeros años de vida tus pequeños 
              </Card.Text>
              <Button className="buttonPlan" href="/DetallesplanCachorros"  variant="secondary">¡Quiero conocer este plan!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3 p-0 mt-3">
          <Card>
            <Card.Img height={300} variant="top" src={Madurando} />
            <Card.Body className="bodyCard">
              <Card.Title>MADURANDO (5-10 AÑOS)</Card.Title>
              <Card.Text>
                !Un plan diseñado para cuidar a los mas energicos de nuestras casas!
              </Card.Text>
              <Button className="buttonPlan" href="/DetallesplanMadurando" variant="secondary">¡Quiero conocer este plan!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3 p-0 mt-3">
          <Card>
            <Card.Img height={300} variant="top" src={Adultos} />
            <Card.Body className="bodyCard">
              <Card.Title>ADULTOS (+10 AÑOS)</Card.Title>
              <Card.Text>
                Un plan diseñado a medida de nuestros viejos amigos
              </Card.Text>
              <Button className="buttonPlan" href="/DetallesplanAdultos"  variant="secondary">¡Quiero conocer este plan!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardPlanes;
