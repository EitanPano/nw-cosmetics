import { useEffect, useState } from 'react';
import { productService } from '../services/productService';

import { ProductList } from '../components/products/ProductList';
import { Container } from 'react-bootstrap';

export const Products = () => {
    const [products, setProducts] = useState([])

    const loadProducts = async () => {
        const products = await productService.query()
        setProducts(products)
    }

    useEffect(() => {      
        loadProducts()
    }, [])

    return (
        <main className="main-layout">
            <Container>
                <h2 className='my-3'>Our Products</h2>
                <ProductList products={products}></ProductList>
            </Container>
        </main>
    );
};
