/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListaClientes = ({ patient,  getApi }) => {
  const URL_BASE = import.meta.env.VITE_API_URL_BASE;

  const hundleDelete = (id) => {
  
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "sí, borralo!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL_BASE}/patients/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          
          if (res.status === 200) {
            Swal.fire("Borrado!", "Su turno ha sido eliminado.", "success");
            getApi();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <tr>
      <td>{patient.nombre}</td>
      <td>{patient.apellido}</td>
      <td>{patient.eMail}</td>
      <td>{patient.telefono}</td>
      <td>{patient.nombreMascota}</td>
      <td>{patient.especie}</td>
      <td>{patient.id}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-success mx-1 rounded-pill"
            to={`/patient/edit/${patient._id}`}
          >
            Editar
          </Link>
          <button
            className="btn btn-danger mx-1 rounded-pill"
            onClick={() => hundleDelete(patient._id)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListaClientes;
