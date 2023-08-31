import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Forms = () => {
  function insertar() {
    Swal.fire('Listo!', 'Tu consulta fue enviada.', 'success');
    reset();
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <Form onSubmit={handleSubmit(insertar)}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          placeholder="Ingrese su Nombre"
          type="text"
          {...register("Nombre", {
            required: true,
            pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            minLength: 3,
            maxLength: 20,
          })}
        />
        {errors.Nombre?.type === "required" && (
          <p>Ingrese su Nombre. Por favor. </p>
        )}
        {errors.Nombre?.type === "pattern" && (
          <p>Ingrese solo letras. Por favor. </p>
        )}
        {errors.Nombre?.type === "minLength" && (
          <p>Ingrese como minimo 3 caracteres. Por favor. </p>
        )}
        {errors.Nombre?.type === "maxLength" && (
          <p>Ingresó el maximo de caracteres. </p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su Apellido"
          {...register("Apellido", {
            required: true,
            pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            minLength: 3,
            maxLength: 25,
          })}
        />
        {errors.Apellido?.type === "required" && (
          <p>Ingrese su Apellido. Por favor. </p>
        )}
        {errors.Apellido?.type === "pattern" && (
          <p>Ingrese solo letras. Por favor. </p>
        )}

        {errors.Apellido?.type === "minLength" && (
          <p>Ingrese como minimo 3 caracteres. Por favor. </p>
        )}
        {errors.Apellido?.type === "maxLength" && (
          <p>Ingresó el maximo de caracteres. </p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          {...register("Email", {
            required: true,
            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
          })}
        />
        {errors.Email?.type === "required" && (
          <p>Ingrese un Correo Electronico. Por favor. </p>
        )}
        {errors.Email?.type === "pattern" && (
          <p>El formato de correo no es Valido. </p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCelular">
        <Form.Label>Numero de Celular</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su numero de Celular"
          {...register("Celular", {
            required: true,
            minLength: 10,
            maxLength: 13,
          })}
        />
        {errors.Celular?.type === "required" && (
          <p>Ingrese un numero de Celular. Por favor. </p>
        )}
        
        {errors.Celular?.type === "min" && (
          <p>Ingrese al menos 10 digitos. Por favor. </p>
        )}
        {errors.Celular?.type === "max" && (
          <p>Ingrese un numero no mayor a 13 digitos. Por favor. </p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
        <Form.Label >Como podemos Ayudarte?</Form.Label>
        <Form.Control
          placeHolder='tienes un limite de 120 caracteres'
          as="textarea"
          rows={3}
          {...register("Descripcion", {
            required: true,
            minLength: 5,
            maxLength: 120,
          })}
        />
        {errors.Descripcion?.type === "required" && (
          <p>Ingrese una consulta. Por favor. </p>
        )}
        {errors.Descripcion?.type === "minLength" && (
          <p>Ingrese como minimo una consulta de 5 caracteres. Por favor. </p>
        )}
        {errors.Descripcion?.type === "maxLength" && (
          <p>El limite de caracteres para su consulta es de 120. </p>
        )}
        
      </Form.Group>

      <Button variant="secondary" type="submit">
        Enviar
      </Button>
      <Form.Text className="text-muted m-1">
        No compartiremos su identidad con nadie.
      </Form.Text>
    </Form>
  );
};

export default Forms;
