import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function insertar() {
    reset();
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
                  })}
                  placeholder="Nombre"
                />

                {errors.nombre?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese solo palabras
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
                    minLength: 4,
                    maxLength: 20,
                  })}
                  placeholder="Apellido"
                />

                {errors.apellido?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese solo palabras
                  </p>
                )}
                {errors.apellido?.type === "minLength" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    {" "}
                    Ingrese como minimo 4 caracteres
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
                    Ingrese solo numeros
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
                    maxLength: 20,
                  })}
                  placeholder="Mensaje"
                />

                {errors.nombre?.type === "required" && (
                  <p style={{ color: "red", fontSize: "25px" }}>
                    Dejanos tu mensaje!
                  </p>
                )}
              </Form.Group>

              <Button type="submit" variant="primary">
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
