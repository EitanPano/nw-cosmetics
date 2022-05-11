import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../store/product/actions';
// import { productService } from '../services/product.service';

import { ProductList } from '../components/products/ProductList';
import { Container } from 'react-bootstrap';

export const Products = () => {
    // const [products, setProducts] = useState([])
    const { products } = useSelector((state) => state.productModule);
    const dispatch = useDispatch();

    // const loadProducts = async () => {
    //     products = dispatch()
    //     // setProducts(products)
    // }

    useEffect(() => {
        dispatch(loadProducts());
    }, []);

    return (
        <main className="main-layout">
            <Container>
                <h2 className="my-3">Our Products</h2>
                <ProductList products={products}></ProductList>
            </Container>
        </main>
    );
};
