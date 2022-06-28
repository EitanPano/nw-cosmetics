import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/product/actions';
import { addToCart } from '../store/cart/actions';

import { Container } from 'react-bootstrap';
import { HomeCarousel } from '../components/HomeComponents/HomeCarousel';
import { HomeServices } from '../components/HomeComponents/HomeServices';
import { ProductList } from '../components/ProductComponents/ProductList';
import { Message } from '../components/Message';
import { NewsLetter } from '../components/NewsLetter';

export const Home = () => {
    const { products, error } = useSelector((state) => state.productModule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts({sortBy: 'Rating', limit: 6}));
    }, [dispatch]);

    const onAddToCart = (ev, productId, qty=1) => {
        ev.preventDefault()
        ev.stopPropagation()
        console.log('productId', productId)
        dispatch(addToCart(productId, qty))
    }

    return (
        <main className="main-layout pt-0">
            <HomeCarousel></HomeCarousel>
            <Container className='position-relative pt-4'>
                <img className='svg-background' src="../assets/imgs/floral-flourish-side.svg" alt="floral" />
                <hr className='my-5' />
                <HomeServices></HomeServices>
                <hr className='my-5' />
                <h2 className="my-4 text-center">Best Sellers</h2>
                <Message variant='danger'>{error}</Message>
                <ProductList isSample={true} products={products} onAddToCart={onAddToCart}></ProductList>
                <hr className='my-5' />
            </Container>
            <NewsLetter></NewsLetter>
        </main>
    );
};
