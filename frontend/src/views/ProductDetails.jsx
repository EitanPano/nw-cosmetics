import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../store/product/actions';
import { addToCart } from '../store/cart/actions'

import { Col, Row, Container, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Rating } from '../components/Rating';
import { Message } from '../components/Message';
import { Loader } from '../components/Loader';
import { CartForm } from '../components/CartComponents/CartForm';
import { GoBack } from '../components/GoBack';

export const ProductDetails = () => {
    const { selectedProduct, error } = useSelector((state) => state.productModule);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
        window.scrollTo(0, 0);
    }, [dispatch, id]);
    
    const onAddToCart = (qty) => {
        dispatch(addToCart(selectedProduct._id, qty))
        // navigate('/product')
    }

    return (
        <main className="main-layout">
            <Container>
                <Row className=" mb-3">
                    <Col>
                        <GoBack></GoBack>
                    </Col>
                </Row>

                <Message variant="danger">{error}</Message>

                { !selectedProduct ? <Loader></Loader> : (
                    <Row>
                    <Col sm={6} lg={4}>
                        <Image src={selectedProduct.image} fluid alt={selectedProduct.name} ></Image>
                    </Col>
                    <Col sm={6} lg={5}>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h3>{selectedProduct.name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating avg={selectedProduct.rating} total={selectedProduct.reviewCount} />
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>Price: ${selectedProduct.price}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>Description: {selectedProduct.description}</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <CartForm price={selectedProduct.price} inStockCount={selectedProduct.inStockCount} onAddToCart={onAddToCart} />
                    
                </Row>
                )}

            </Container>
        </main>
    );
};
