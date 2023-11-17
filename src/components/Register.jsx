import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( form.email, form.password );
  };

  return (
    <>
      <div>Register</div>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formRegisterEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email" // Agrega el atributo name con el mismo valor que la clave en el estado form
            value={form.email}
            onChange={handleChange} // Usa la función handleChange para manejar cambios en el campo
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password" // Agrega el atributo name con el mismo valor que la clave en el estado form
            value={form.password}
            onChange={handleChange} // Usa la función handleChange para manejar cambios en el campo
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRegisterCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
