import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { postUser } from '../../services/axios/axiosService.js'


export default function Signup() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {


    const userObj = {
      "name": data.name,
      "last_name": data.last_name,
      "email": data.email,
      "password": data.password,
    }

    console.log(userObj)
    sendUser(userObj);
  };



  function sendUser(obj) {
    postUser(obj)
    .then((response)=>{
      console.log("ok");
      console.log(response);
    })
    .catch((error)=>{
      console.log("error");
      console.log(error);
    })
  }

  

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-3 justify-content-md-center" sm={10}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: "Correo es obligatorio" })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: "Password es obligatorio" })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "nombre es obligatorio" })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>last_name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last_name"
                  {...register("last_name", { required: "apellido es obligatorio" })}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </>
  )
}
