import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const NewsLetter = () => {
    return (
        <div className='newsletter p-5'>
            <img src="../assets/imgs/red-rose.svg" className='red-rose' alt="red-rose" />
            <Container>
                <Form className='py-4'>
                <h3 className='text-center mb-5'>Subscribe to our Newsletter</h3>
                    <Row className='d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center' xl={6} >
                        <Col>
                            <Form.Control placeholder='Full-Name'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control placeholder='Phone-Number'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control placeholder='* Email'></Form.Control>
                        </Col>
                    </Row>
                    <Form.Check className='mt-3 d-flex flex-row justify-content-center' type="checkbox" label="I agree to get email updates" />
                    <Row className='mt-3'><Button>Subscribe</Button></Row>
                </Form>
            </Container>
        </div>
    );
};
