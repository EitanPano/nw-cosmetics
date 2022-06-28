import { Row } from 'react-bootstrap';
import { Loader } from '../Loader';
import { ProductPreview } from './ProductPreview';

export const ProductList = ({ products, isSample, onAddToCart }) => {

    if (!products || !products.length) return <Loader></Loader>
    return (
        <Row>
            {products.map((product) => (
                <ProductPreview
                    isSample={isSample}
                    product={product}
                    onAddToCart={onAddToCart}
                    key={product._id}
                ></ProductPreview>
            ))}
        </Row>
    );
};
