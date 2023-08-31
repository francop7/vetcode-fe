import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function insertar() {
    reset( );
    Swal.fire('Listo!', 'Tu consulta fue enviada.', 'success');
  }
  
  return (
    <>
      <br />
      <h2 className="text-darck">¿Aún tienes dudas? </h2>
      <h4 className="text-darck">
        Dejanos tu mensaje y nos pondremos en contacto con vos a la brevedad
      </h4>
      <br />
      <br />
      <div className="container col-md-5 col-sm-12 text-center   ">
        <div className="row">
          <div className="card border-0 ">
            <Form onSubmit={handleSubmit(insertar)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput Nombre"
              >
                <Form.Control
                  type="text"
                  {...register("nombre", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern:/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g ,

                  })}
                  placeholder="Nombre"
                />
                {errors.nombre?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Este campo es requerido
                  </p>
                )}
                {errors.nombre?.type === "pattern" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese solo letras
                  </p>
                )}
                {errors.nombre?.type === "minLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como minimo 2 caracteres
                  </p>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como maximo 20 caracteres
                  </p>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput Apellido"
              >
                <Form.Control
                  type="text"
                  {...register("apellido", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g ,
                  })}
                  placeholder="Apellido"
                />
                {errors.apellido?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Este campo es requerido
                  </p>
                )}
                {errors.apellido?.type === "pattern" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese solo letras
                  </p>
                )}
                {errors.apellido?.type === "minLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como minimo 2 caracteres
                  </p>
                )}
                {errors.apellido?.type === "maxLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como maximo 20 caracteres
                  </p>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput Telefono"
              >
                <Form.Control
                  type="number"
                  {...register("telefono", {
                    required: true,
                    minLength: 10,
                    maxLength: 15,
                  })}
                  placeholder="Telefono"
                />

                {errors.telefono?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Este campo es requerido
                  </p>
                )}
                {errors.telefono?.type === "minLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como minimo 10 caracteres
                  </p>
                )}
                {errors.telefono?.type === "maxLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como maximo 15 caracteres
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Ingrese su email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  })}
                />
                {errors.Email?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    Ingrese un Correo Electronico. Por favor.{" "}
                  </p>
                )}
                {errors.Email?.type === "pattern" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    El formato de correo no es Valido.{" "}
                  </p>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput Nombre"
              >
                <Form.Control
                  as="textarea"
                  {...register("Mensaje", {
                    required: true,
                    minLength: 3,
                    maxLength: 140,
                  })}
                  placeholder="Mensaje"
                />
                {errors.Mensaje?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Este campo es requerido
                  </p>
                )}
                {errors.Mensaje?.type === "minLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como minimo 3 caracteres
                  </p>
                )}  
                {errors.Mensaje?.type === "maxLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como maximo 140 caracteres
                  </p>
                )}


              </Form.Group>

              <Button onClick={handleSubmit} type="submit" variant="primary">
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formulario;
