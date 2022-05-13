import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems } from '../store/cart/actions';

import { Col, Container, Row } from 'react-bootstrap';
import { CartItemList } from '../components/cart/CartItemList';

export const Cart = () => {
    const { cartItems } = useSelector((state) => state.cartModule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCartItems());
        return () => {};
    }, [dispatch]);

    return (
        <main className="main-layout">
            <Container>
                <h2>Shopping Cart</h2>
                <Row className='d-flex flex-column-reverse flex-md-row'>
                    <Col md={5}>
                        <h3>HERE GOES THE ORDER FORM?</h3>
                    </Col>
                    <CartItemList cartItems={cartItems} />
                </Row>
            </Container>
        </main>
    );
};
