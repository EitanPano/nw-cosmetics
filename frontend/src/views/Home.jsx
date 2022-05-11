import { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import { ProductList } from '../components/products/ProductList';
import { productService } from '../services/product.service';

export const Home = () => {
    const [products, setProducts] = useState([])


    const loadProducts = async () => {
        const products = await productService.query()
        setProducts(products)
    }

    useEffect(() => {      
        loadProducts()
    }, [])
    

    if (!products) return <h2>Loading...</h2>
    return (
        <main className="main-layout">
            <Container>
                <h2 className='my-3'>Welcome</h2>
                <ProductList products={products}></ProductList>
            </Container>
        </main>
    );
};
