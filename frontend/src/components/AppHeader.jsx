import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/imgs/logo.png';

export const AppHeader = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} width="40" height="40" alt=""/> 
                        {' NW-Cosmetics'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">
                                <i className="fa-solid fa-house"></i> Home
                            </Nav.Link>
                            <Nav.Link href="/products">
                                <i className="fa-solid fa-leaf"></i> Products
                            </Nav.Link>
                            <Nav.Link href="/cart">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </Nav.Link>
                            <Nav.Link href="/auth">
                                <i className="fas fa-user"></i> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
