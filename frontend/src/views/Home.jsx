import { Container } from 'react-bootstrap';

import products from '../data/products.json';
import { ProductList } from '../components/products/ProductList';

export const Home = () => {
    return (
        <main className="py-3">
            <Container>
                <ProductList products={products}></ProductList>
            </Container>
        </main>
    );
};
