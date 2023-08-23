/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import EditClientes from "../../components/Admin/ListaClientes/EditClientes";

const UpdateClient = ({URL_BASE, getApi, token}) => {
  const navigate = useNavigate()
  if (!token) {
    navigate('/Login')
  }
  return (
    <div className="bg-color">
      <EditClientes URL_BASE={URL_BASE} getApi={getApi}/>
    </div>
  );
};

export default UpdateClient;
