import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/imgs/logo.png';

export const AppHeader = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleMenu = () => setIsExpanded(!isExpanded)
    const closeMenu = () => isExpanded ? toggleMenu() : null;

    useEffect(() => {
        document.body.addEventListener('click', closeMenu)
        return () => {
            document.body.removeEventListener('click', closeMenu)
        }
    })
    
    const burgerStyle = {borderRadius: '0.25em'}

    return (
        <header>
            <Navbar expanded={isExpanded} onClick={(ev) => ev.stopPropagation()} fixed='top' bg="dark" variant="dark" expand="md" className='py-3'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} width="40" height="40" alt="" />
                        {' NW-Cosmetics'}
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={toggleMenu} aria-controls="responsive-navbar-nav" style={burgerStyle}>
                        {/* PASS TOGGLE PRESSED ICON CMP */}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink onClick={toggleMenu} to="/" className="nav-link">
                                <i className="fa-solid fa-house"></i> Home
                            </NavLink>
                            <NavLink onClick={toggleMenu} to="/product" className="nav-link">
                                <i className="fa-solid fa-leaf"></i> Products
                            </NavLink>
                            <NavLink onClick={toggleMenu} to="/cart" className="nav-link">
                                <i className="fas fa-shopping-cart"></i> Cart
                            </NavLink>
                            <NavLink onClick={toggleMenu} to="/auth" className="nav-link">
                                <i className="fas fa-user"></i> Sign In
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
