import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

export const AppHeader = () => {
    return (
        <header>
            <Navbar fixed='top' bg="dark" variant="dark" expand="lg" className='py-3'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} width="40" height="40" alt="" />
                        {' NW-Cosmetics'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link">
                                <i className="fa-solid fa-house"></i> Home
                            </NavLink>
                            <NavLink to="/product" className="nav-link">
                                <i className="fa-solid fa-leaf"></i> Products
                            </NavLink>
                            <NavLink to="/cart" className="nav-link">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </NavLink>
                            <NavLink to="/auth" className="nav-link">
                                <i className="fas fa-user"></i> Sign In
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
