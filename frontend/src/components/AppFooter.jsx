import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const AppFooter = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        &copy;Copyrights by EP-Development
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
