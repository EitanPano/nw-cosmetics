import { Row } from 'react-bootstrap';
import { Loader } from '../Loader';
import { ProductPreview } from './ProductPreview';

export const ProductList = ({ products }) => {

    if (!products || !products.length) return <Loader></Loader>
    return (
        <Row>
            {products.map((product) => (
                <ProductPreview
                    product={product}
                    key={product._id}
                ></ProductPreview>
            ))}
        </Row>
    );
};
