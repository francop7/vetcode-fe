/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  validateFecha,
  validateHora,
  validateNombreApellido,
  validateProf,
  validatetextarea,
} from '../../Helpers/validacionesTurnos';
import '../AdminView/admin.css'
import image1 from '../../assets/Images/Enfermero.jpg'

const TurnosCreate = ({ URL_BASE, getAp, token }) => {
  const [TurnoPetName, setTurnoPetName] = useState('');
  const [TurnoDoctor, setTurnoDoctor] = useState('');
  const [TurnoDetalle, setTurnoDetalle] = useState('');
  const [TurnoFecha, setTurnoFecha] = useState('');
  const [TurnoHora, setTurnoHora] = useState('');
  const navigate = useNavigate();

  if (!token) {
    navigate('/Login')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNombreApellido(TurnoPetName) ||
      !validateProf(TurnoDoctor) ||
      !validatetextarea(TurnoDetalle) ||
      !validateFecha(TurnoFecha) ||
      !validateHora(TurnoHora)
    ) {
      Swal.fire('Ops!', 'Llene correctamente los casilleros.', 'error');
      return;
    }
    const nuevoTurno = {
      TurnoPetName,
      TurnoDoctor,
      TurnoDetalle,
      TurnoFecha,
      TurnoHora,
    };

    Swal.fire({
      title: 'Esta seguro?',
      text: 'No podra revertir este paso!',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: 'Agendar!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL_BASE + '/turnos', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoTurno),
          });
          if (res.status === 201) {
            Swal.fire(
              'Turno Agendado!',
              'Su turno fue agendado exitosamente.',
              'success'
            );
            getAp();
            navigate('/Turnos/tabla');
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className='bg-color'>
      <Container className="py-5 container">
        <h3 className="text-center text-color fw-bold display-4">AGENDAR TURNOS</h3>
        <Link to='/Turnos/Tabla' className='fw-bold' >VER TURNOS ASIGNADOS</Link>
        <hr />
        <Row>
          <Col sm={12} md={6}>
            <div className="my-5">
              <img
                src={image1}
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="my-4">
            <Form className="my-3" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">
                  Nombre de la Mascota
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la Mascota"
                  onChange={({ target }) => setTurnoPetName(target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Profesionales*</Form.Label>
                <Form.Select
                  onChange={({ target }) => setTurnoDoctor(target.value)}
                >
                  <option value="">Seleccione al profesional</option>
                  <option value="Dra Liza Morgan">Dra Juana Carrasco</option>
                  <option value="Dr Adrian Munir">Dr John Dolittle</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-bold">Detalle De la Cita</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={({ target }) => setTurnoDetalle(target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Fecha</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Escriba la fecha"
                  onChange={({ target }) => setTurnoFecha(target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Horario</Form.Label>
                <Form.Select
                  onChange={({ target }) => setTurnoHora(target.value)}
                >
                  <option value="">Elija el horario</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </Form.Select>
              </Form.Group>
              <button className="btn btn-success">Guardar</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TurnosCreate;
