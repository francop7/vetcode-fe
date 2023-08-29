import { Card } from "react-bootstrap";
import "./styleComentario.css";
import imagenicono1 from "../../assets/Images/leomechi.png";
import imagenicono2 from "../../assets/Images/iconouser.jpg";

const CardComentarios = () => {
  return (
    <>
      <div className="container-fluid " id="Cardbg">
        <h1>Nuestros clientes dicen:</h1>
        <br />
        <Card className="cardcomentario col-12 col-md-6 col-lg-4 d-inline-block align-content-center bg-light">
          <img
            className=""
            id="imageniconocoment"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VGNrcGcxKCGuhwj92bYotw6TScyNSCHqH1JyNChDoZlFihM-eOyJNzg24tGIgBKCWz4&usqp=CAU"
            alt="icono de user"
          />
          <Card.Body className="p-3">
            <div className="cardcomentario2 mb-1">
              <Card.Title className="text-center mb-0">Diego Olmi</Card.Title>
              <Card.Subtitle className="text-muted text-center nombrecomentarios">
                @DiegoOlmi912 | 04/09
              </Card.Subtitle>
            </div>
            <div className="mb-1">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <Card.Text>
              Muy buena la atencion, excelente trato de los medicos
              profesionales y muy buena pagina!
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />
        <Card className="cardcomentario col-12 col-md-6 col-lg-4 d-inline-block align-content-center bg-light">
          <img
            className="bg-light"
            id="imageniconocoment"
            src={imagenicono1}
            alt="icono de user"
          />
          <Card.Body className="p-3">
            <div className="cardcomentario2 mb-1">
              <Card.Title className="text-center align-content-center mb-0">
                Lionel Messi
              </Card.Title>
              <Card.Subtitle className="text-muted text-center nombrecomentarios">
                @Leomessi10 | 4H
              </Card.Subtitle>
            </div>
            <div className="mb-1">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <Card.Text>epetacular la pagina che . muy linda .</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />
        <Card className="cardcomentario col-12 col-md-6 col-lg-4 d-inline-block align-content-center bg-light">
          <img
            className=""
            id="imageniconocoment"
            src={imagenicono2}
            alt="icono de user"
          />
          <Card.Body className="p-3">
            <div className="cardcomentario2 mb-1">
              <Card.Title className="text-center mb-0">Juan Roman</Card.Title>
              <Card.Subtitle className="text-muted text-center nombrecomentarios">
                @Juanroman2311 | 11/03
              </Card.Subtitle>
            </div>
            <div className="mb-1">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
            </div>
            <Card.Text id="comentariosdeusuario3">
              Lleve a mi perro BENEDETTO y lo trataron muy bien. Nada para
              reprochar.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
    </>
  );
};
export default CardComentarios;
