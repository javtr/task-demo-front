import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


export default function Buttons() {
    const navigate = useNavigate();

    return (
        <>
            <Col className="mt-3 justify-content-md-center" sm={6}>
                <Button
                    onClick={() => { navigate("/login") }}
                    variant="danger">Log in</Button>{' '}
            </Col>
            <Col className="mt-3 justify-content-md-center" sm={6}>
                <Button
                    onClick={() => { navigate("/signup") }}
                    variant="info">Sign up</Button>{' '}
            </Col>
        </>
    )
}
