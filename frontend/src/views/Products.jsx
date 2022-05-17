import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../store/product/actions';

import { ProductList } from '../components/ProductComponents/ProductList';
import { Container } from 'react-bootstrap';
import { Message } from '../components/Message';

export const Products = () => {
    const { products, error } = useSelector((state) => state.productModule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);


    return (
        <main className="main-layout">
            <Container>
                <h2 className="my-3">Our Products</h2>
                <Message variant='danger'>{error}</Message>
                <ProductList products={products}></ProductList>
            </Container>
        </main>
    );
};
