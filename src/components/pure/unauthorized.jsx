import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Unauthorized() {
    return (
        <>
            <Col className="mt-3 justify-content-md-center" sm={12}>
                <Card className="text-center">
                    <Card.Header>Unauthorized</Card.Header>
                    <Card.Body>
                        <Card.Title>usuario sin autorizacion</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go Login</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>



            </Col>

        </>
    )
}
