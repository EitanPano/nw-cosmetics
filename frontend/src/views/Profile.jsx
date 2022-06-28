import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';

export const Profile = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <main className="profile main-layout pt-0">
            <Container>
                <Row>
                    <Col md={4} className="px-0">
                        <Navbar key={isExpanded} expand={isExpanded} className="mb-3">
                            <Container fluid className="justify-content-start px-2">
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${isExpanded}`} className='d-md-none'>
                                    <i className="fa-solid fa-gear p-1 text-secondary"></i>
                                </Navbar.Toggle>
                                <h2 className="m-0 ms-3">My Account</h2>
                                <Navbar.Offcanvas
                                    aria-labelledby={`offcanvasNavbarLabel-expand-${isExpanded}`}
                                    placement="start"
                                    className="main-layout"
                                    >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title><h3 className='m-0'>My Account</h3></Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 px-3">
                                            <Nav.Link href="#action1">My Details</Nav.Link>
                                            <Nav.Link href="#action2">My Orders</Nav.Link>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="d-none d-md-block">
                        <Nav className="flex-column justify-content-start flex-grow-1 px-3">
                            <Link to="/profile/details" className='nav-link'>My Details</Link>
                            <Link to="/profile/orders" className='nav-link'>My Orders</Link>
                        </Nav>
                    </Col>
                    <Outlet />
                </Row>

            </Container>
        </main>
    );
};
