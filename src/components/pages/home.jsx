import React, { useEffect } from 'react'
import Buttons from '../pure/buttons';
import HomeContent from '../pure/homeContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Unauthorized from '../pure/unauthorized';


export default function Home() {


    useEffect(() => {
    }, []);


    return (
        <>
            <Container>
                <Row>
                    <Buttons></Buttons>
                    <HomeContent></HomeContent>
                    <Unauthorized></Unauthorized>
                </Row>
            </Container>
        </>
    )
}