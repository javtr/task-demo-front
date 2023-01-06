import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import {postLogin} from "../../services/axios/axiosService.js"

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        const userObj = {
          "usuario": data.email,
          "clave": data.password,
        }
    
        loginUser(userObj);
      };


      function loginUser(obj) {
        postLogin(obj)
        .then((response)=>{
          console.log(response);
        })
        .catch((error)=>{
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
