/* eslint-disable react/prop-types */

import AdminClientesCreate from '../../components/Admin/AdminClientesCreate'
import AdminClientes from '../../components/Admin/AdminClientes'
import './admin.css'
import { useNavigate } from "react-router-dom";



const AdminPrincipal = ({URL_BASE , getApi, patients, token}) => {
  
  const navigate = useNavigate()
  if (!token) {
    navigate('/Login')
  }
  return (
    <div className='bg-color'>
      <AdminClientesCreate URL_BASE={URL_BASE} getApi={getApi}/>
      <AdminClientes patients={patients} URL_BASE={URL_BASE} getApi={getApi} />
    </div>
  )
}

export default AdminPrincipal