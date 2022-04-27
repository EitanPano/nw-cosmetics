import { Outlet } from 'react-router-dom';

import products from '../data/products.json';

import { ProductList } from '../components/products/ProductList';
import { Container } from 'react-bootstrap';

export const Products = () => {
    return (
        <main className="main-layout">
            <Container>
                <h2 className='my-3'>Our Products</h2>
                <ProductList products={products}></ProductList>
            </Container>
            {/* <Outlet></Outlet> */}
        </main>
    );
};
