import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/product/actions';

import { Container } from 'react-bootstrap';
import { ProductList } from '../components/products/ProductList';
import { Message } from '../components/Message';

export const Home = () => {
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
