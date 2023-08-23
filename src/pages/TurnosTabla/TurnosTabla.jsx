/* eslint-disable react/prop-types */

import { Container, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Turnos from './Turnos/Turnos';
import '../AdminView/admin.css'


const TurnosTabla = ({ turnos, URL_BASE, getAp }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  if (!token) {
    navigate('/Login')
  }
  return (
    <div className='bg-color turnos-heigth'>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="text-color fw-bold display-4">LISTA TURNOS</h3>
          <Link className="btn btn-colorize rounded-pill" to="/Turnos/Create">
            Agregar Turno
          </Link>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Nombre Mascota</th>
              <th>Veterinario</th>
              <th>Detalle de la cita</th>
              <th>Fecha</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <Turnos key={turno._id} turno={turno} URL_BASE={URL_BASE} getAp={getAp} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TurnosTabla;
