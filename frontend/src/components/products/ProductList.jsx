import React from 'react';
import { Row } from 'react-bootstrap';
import { ProductPreview } from './ProductPreview';

export const ProductList = ({ products }) => {
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
