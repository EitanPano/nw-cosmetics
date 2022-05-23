import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppLogo } from './AppLogo';

export const AppFooter = () => {
    return (
        <footer className="app-footer bg-dark text-light pt-5">
            <Container>
                <Row className="text-center">
                    <Col md={5} className='text-center pt-1'>
                        <AppLogo textColor={'light'}></AppLogo>
                        <p className='mb-4'>Call Us: +0921234569</p>
                    </Col>

                    <Col md={7} className="app-links d-flex pt-3">
                        <Col className="d-flex flex-column">
                            <h4>Services</h4>
                            <Link to={'/product'}>Products</Link>
                            <Link to={'/treatment'}>Treatments</Link>
                        </Col>
                        <Col className="d-flex flex-column">
                            <h4>Articles</h4>
                            <Link to={'/article/health'}>Health</Link>
                            <Link to={'/article/lifestyle'}>Lifestyle</Link>
                            <Link to={'/article/food'}>Food Recipes</Link>
                            <Link to={'/article/weight'}>Weight Loss</Link>
                            <Link to={'/article/hygiene'}>Hygiene</Link>
                        </Col>
                        <Col className="d-flex flex-column">
                            <h4>Site-Map</h4>
                            <Link to={'/product'}>Products</Link>
                            <Link to={'/treatment'}>Treatments</Link>
                            <Link to={'/cart'}>Cart</Link>
                            <Link to={'/profile'}>Profile</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <p className='text-center copyright'>&copy;Copyrights by EP-Development</p> 

        </footer>
    );
};
