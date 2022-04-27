import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { productService } from '../services/productService';

import { Col, Row, Container, Image, ListGroup, ListGroupItem, Button, } from 'react-bootstrap';
import { Rating } from '../components/Rating';

export const ProductDetails = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const getProduct = async (id) => {
        const products = await productService.query();
        const selectedProduct = products.find((product) => product._id === id);
        setSelectedProduct(selectedProduct);
    };

    const isInStock = () => {
        return selectedProduct.inStockCount > 0 ? true : false;
    }

    useEffect(() => {
        getProduct(id);
    }, []);

    if (!selectedProduct) return null
    return (
        <main className="main-layout">
            <Container>
                <Row className='my-2'>
                    <Col xs={4}>
                        <NavLink to="/product" className="nav-link my-2">← Go Back</NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={4}>
                        <Image src={selectedProduct.image} fluid alt={selectedProduct.name} ></Image>
                    </Col>
                    <Col sm={6} lg={5}>
                        <ListGroup variant="flush">
                            <ListGroupItem><h3>{selectedProduct.name}</h3></ListGroupItem>
                            <ListGroupItem>
                                <Rating avg={selectedProduct.rating} total={selectedProduct.reviewCount}></Rating>    
                            </ListGroupItem>
                            <ListGroupItem><p>Price: ${selectedProduct.price}</p></ListGroupItem>
                            <ListGroupItem><p>Description: {selectedProduct.description}</p></ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg={3}>
                        <ListGroup variant=''>
                            <ListGroupItem>
                                <Row>
                                    <Col><p>Price:</p></Col>
                                    <Col className='text-end'><p>${selectedProduct.price}</p></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col><p>In-Stock:</p></Col>
                                    <Col className='text-end'><p>{isInStock() ? '✓' : '✘'}</p></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Button disabled={!isInStock()} className='btn-block'>Add to Cart</Button>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
