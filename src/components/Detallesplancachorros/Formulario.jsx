import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

function Formulario() {
  const mostrarAlerta = () => {
    swal({
      title: "Tu consulta fue enviada",
      icon: "success",
      button: "Aceptar",
    });
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function insertar() {}
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
                  <p> Ingrese solo palabras</p>
                )}
                {errors.nombre?.type === "minLength" && (
                  <p> Ingrese como minimo 2 caracteres</p>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <p> Ingrese como maximo 20 caracteres</p>
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
                  <p> Ingrese solo palabras</p>
                )}
                {errors.apellido?.type === "minLength" && (
                  <p> Ingrese como minimo 4 caracteres</p>
                )}
                {errors.apellido?.type === "maxLength" && (
                  <p> Ingrese como maximo 20 caracteres</p>
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
                  <p> Ingrese solo numeros</p>
                )}
                {errors.telefono?.type === "minLength" && (
                  <p> Ingrese como minimo 10 caracteres</p>
                )}
                {errors.telefono?.type === "maxLength" && (
                  <p> Ingrese como maximo 15 caracteres</p>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlInput email"
              >
                <Form.Control
                  type="text"
                  placeholder="Name@example.com"
                  {...register("email", {
                    pattern:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    required: true,
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <p> El formato del correo no es valido</p>
                )}
                {errors.email?.type === "requiered" && (
                  <p> Es necesario completar este campo</p>
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
                  <p>Ingrese solo palabras</p>
                )}
              </Form.Group>

              <Button
                onClick={() => mostrarAlerta()}
                type="submit"
                variant="primary"
              >
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
