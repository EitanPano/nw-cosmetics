import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItems, updateCartItem, removeFromCart } from '../store/cart/actions';

import { Button, Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { CartItemList } from '../components/CartComponents/CartItemList';

export const Cart = () => {
    const { cartItems } = useSelector((state) => state.cartModule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCartItems());
    }, [dispatch]);

    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const getTotalQty = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0)
    }

    const onUpdateCartItem = (item) => {
        dispatch(updateCartItem(item))
    }

    const onRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const goCheckout = () => {}

    return (
        <main className="main-layout">
            <Container>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col md={7} lg={6} xl={5}>
                        <h3 className='my-3'>My Cart - {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Products</h3>
                        <CartItemList cartItems={cartItems} onUpdateCartItem={onUpdateCartItem} onRemoveFromCart={onRemoveFromCart} />
                    </Col>

                    {/* CHECKOUT PREVIEW */}
                    <Col className='ms-auto mt-3' md={5} lg={4} xxxl={3}>
                        <ListGroup variant="" className='px-4'>
                            <ListGroupItem>
                                <Row><h4 className='text-center my-3'>Total</h4></Row>
                            </ListGroupItem>
                        
                            <ListGroupItem>
                                <Row>
                                    <Col><p>Sub-Total:</p></Col>
                                    <Col className="text-end"><p>${getTotalPrice()}</p></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col><p>Quantity:</p></Col>
                                    <Col className="text-end"><p>{getTotalQty()}</p></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Button onClick={goCheckout} className="btn-block">Checkout</Button>
                                </Row>
                                <Row>
                                    <p className='mt-3 mb-0 text-center strong text-success'>We Accept:</p>
                                    <Image src='../assets/imgs/payment_methods.png'></Image>
                                </Row>
                                <Row>
                                    <p className='text-center'>Got a coupon? Add it in the next step.</p>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                </Row>
            </Container>
        </main>
    );
};
