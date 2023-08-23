import "./styleLogin.css";
import { useForm } from "react-hook-form";
import { password } from "../Login/validar";
import { user } from "../Login/validar";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const URL_BASE = import.meta.env.VITE_API_URL_BASE;

  const navigate = useNavigate();
  async function onSubmit(data) {
    console.log(data)
    try {
      const res = await fetch(URL_BASE + '/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const {token} = await res.json()
      if (token) {
        localStorage.setItem('token', token)
        navigate('/admin')
      } 
    } catch (error) {
      console.log(error)
    }
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="row" id="login">
      <div className="col-3 d-flex justify-content-center" id="inicioSesion">
        <form onSubmit={handleSubmit(onSubmit)} className="formcontrolinicio">
          <h2 className="text-center textoiniciosesion">Inicio Sesion</h2>
          <div className="contenedorDeInput container text-center">
            <label htmlFor="user">Usuario</label>
            <input
              type="text"
              placeholder="UsuarioVet"
              className="form-control"
              {...register("user", {
                required: true,
                minLength: 5,
                maxLength: 5,
                validate: user,
              })}
            />
            {errors.user?.type === "required" && (
              <p>Ingrese su Usuario. Por favor. </p>
            )}
            {errors.user && <p> Usuario Incorrecto.</p>}
            {errors.user?.type === "minLength" && (
              <p>Ingrese como minimo 5 caracteres. Por favor. </p>
            )}
            {errors.user?.type === "maxLength" && (
              <p>Ingresó el maximo de caracteres. </p>
            )}
          </div>
          <div className="contenedorDeInput container mt-2 text-center">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="ConstraseñaVet"
              className="form-control"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 5,
                validate: password,
              })}
            />
            {errors.password?.type === "required" && (
              <p>Ingrese su Contraseña. Por favor. </p>
            )}
            {errors.password && <p>Contraseña Incorrecta. Prueba otra vez. </p>}
            {errors.password?.type === "minLength" && (
              <p>Ingrese como minimo 5 caracteres. Por favor. </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p>Ingresó el maximo de caracteres para una password. </p>
            )}
          </div>
          <button
            // onClick={handleLogin}
            className="mt-3 mb-3 btn btn-outline-primary botondelinicio"
            id="botonInicioSesion"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
