import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AppLogo } from './AppLogo';

export const AppHeader = () => {

    const {cartItems} = useSelector(state=> state.cartModule)
    const getTotalQty = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0)
    }
    
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
        <header className='app-header'>  
            <Navbar expanded={isExpanded} onClick={(ev) => ev.stopPropagation()} fixed='top' bg="dark" variant="dark" expand="md" className='py-3'>
                <Container className='navbar-container'>
                    <AppLogo textColor={'light'}></AppLogo>

                    <div className='side-actions d-flex ms-auto'>
                        <NavLink onClick={() => closeMenu()} to="/auth" className="nav-link">
                            <i className="fas fa-user"></i>
                        </NavLink>
                        <NavLink onClick={() => closeMenu()} to="/cart" className="nav-link">
                            <i className="fas fa-shopping-cart"></i>
                            <span className='cart-count'>{getTotalQty()}</span>
                        </NavLink>
                    </div>
                    <Navbar.Toggle onClick={toggleMenu} aria-controls="responsive-navbar-nav" style={burgerStyle} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='justify-content-between col-12 ps-4'>
                            <div className='d-flex flex-column flex-md-row'>
                                <NavLink onClick={toggleMenu} to="/product" className="nav-link">
                                    Products
                                </NavLink>
                                <NavLink onClick={toggleMenu} to="/about" className="nav-link">
                                    About
                                </NavLink>
                                <NavLink onClick={toggleMenu} to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
