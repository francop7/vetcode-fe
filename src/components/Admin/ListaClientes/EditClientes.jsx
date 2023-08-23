/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import {
  validateNames,
  validateEmail,
  validateNumber,
} from "../../../Helpers/validacionesPacientes";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image3 from '../../../assets/Images/Adultos.jpg'
import image4 from '../../../assets/Images/Adultocard.jpg'


const EditClientes = ({ URL_BASE , getApi }) => {
  const [patient, setPatient] = useState({});
  const { id } = useParams();
  const nombreRef = useRef("");
  const apellidoRef = useRef("");
  const eMailRef = useRef("");
  const telefonoRef = useRef("");
  const nombreMascotaRef = useRef("");
  const especieRef = useRef("");
  const razaRef = useRef("");

  const navigate = useNavigate();

  
  useEffect(()=>{

    async function getPatient () {
    try {
      const res = await fetch(`${URL_BASE}/patients/${id}`);
      const patientApi = await res.json();

      setPatient(patientApi);
    } catch (error) {
      console.log(error);
    }
  }
  getPatient()
  }, []);

  const hundleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNames(nombreRef.current.value) ||
      !validateNames(apellidoRef.current.value) ||
      !validateEmail(eMailRef.current.value) ||
      !validateNumber(telefonoRef.current.value) ||
      !validateNames(nombreMascotaRef.current.value) ||
      !validateNames(especieRef.current.value) ||
      !validateNames(razaRef.current.value)
    ) {
      Swal.fire("Perfecto!", "Validación correcta.", "success");
      return;
    }

    const productoEditado = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      eMail: eMailRef.current.value,
      telefono: telefonoRef.current.value,
      nombreMascota: nombreMascotaRef.current.value,
      especie: especieRef.current.value,
      raza: razaRef.current.value,
    };

    Swal.fire({
      title: "Estas seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Editar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL_BASE}/patients/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productoEditado),
          });

          if (res.status === 200) {
            Swal.fire(
              "Modificado!",
              "Tu archivo ha sido modificado.",
              "success"
            );
            getApi();
            navigate("/admin");
          }
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Modificado!", "Datos modificados.", "success");
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h3 className="text-center text-color fw-bold display-4">
          EDITAR CLIENTES
        </h3>
        <hr />
        <Row>
          <Col sm={12} md={6}>
            <div>
              <img
                src={image3}
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
            <div>
              <img
                src={image4}
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="my-4">
            <Form className="my-5" onSubmit={hundleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bolder">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su Nombre"
                  defaultValue={patient.nombre}
                  ref={nombreRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba su Apellido"
                  defaultValue={patient.apellido}
                  ref={apellidoRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">
                  Correo Electronico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ejemplo@correo.com"
                  defaultValue={patient.eMail}
                  ref={eMailRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">
                  Numero De telefono
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="+549XXXXXXXXXX"
                  defaultValue={patient.telefono}
                  ref={telefonoRef}
                />
              </Form.Group>
              <hr />
              <h4 className="text-color fw-bold">INFORMACION DE LA MASCOTA</h4>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">
                  Nombre de la Mascota
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escriba el nombre de su mascota"
                  defaultValue={patient.nombreMascota}
                  ref={nombreMascotaRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Especie*</Form.Label>
                <Form.Select
                  value={patient.especie}
                  onChange={({ target }) =>
                    setPatient({ ...patient, especie: target.value })
                  }
                  ref={especieRef}
                >
                  <option value="">Seleccione una opcion</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Otro">Otro</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bolder">Raza</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Indique la raza de su mascota"
                  defaultValue={patient.raza}
                  ref={razaRef}
                />
              </Form.Group>
              <div className="text-end">
                <button className="btn btn-colorize">Guardar</button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditClientes;
