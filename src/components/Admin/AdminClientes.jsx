/* eslint-disable react/prop-types */
import { Container, Table } from "react-bootstrap";
import ListaClientes from "./ListaClientes/ListaClientes";
import { Link } from "react-router-dom";

const AdminClientes = ({ patients, URL_BASE, getApi }) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="text-center text-color fw-bold display-4">
            Lista de Pacientes
          </h3>
          <Link to="/Turnos/Create" className="btn btn-colorize rounded-pill">
            Agregar Turnos
          </Link>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>Nomnbre</th>
              <th>Apellido</th>
              <th>E-mail</th>
              <th>Telefono</th>
              <th>Nombre Mascota</th>
              <th>Especie</th>
              <th>Raza</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <ListaClientes
                key={patient.id}
                patient={patient}
                URL_BASE={URL_BASE}
                getApi={getApi}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AdminClientes;
