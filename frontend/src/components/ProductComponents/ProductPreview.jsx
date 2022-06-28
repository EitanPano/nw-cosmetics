import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getTextCut } from '../../services/utils';
import { Rating } from '../Rating';

export const ProductPreview = ({ product, isSample, onAddToCart }) => {
    const navigate = useNavigate()

    
    const SampleProduct = () => (
        <Col xs={6} md={4} xxl={2}>
        <Card onClick={() => navigate(`/product/${_id}`)} className="card-preview my-1 p-2 rounded">
            <Card.Img src={`${product.image}`} variant="top" className="p-1" />
            <Card.Body className='p-1'>
                <Card.Title>{getTextCut(product.name, 30)}</Card.Title>
                <Row  className='text-center'>
                    <Col xs={12}>
                        <Rating avg={product.rating} total={product.reviewCount}></Rating>
                    </Col>
                    <Col>
                        <Card.Text as="h5" className='mt-3'>${product.price}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Button disabled={!product.inStockCount} onClick={(ev) => onAddToCart(ev, _id)} variant="primary">Add to Cart</Button>
        </Card>
    </Col>
    )


    
    const { _id } = product;
    if (isSample) return <SampleProduct></SampleProduct>
    return (
        <Col sm={6} md={6} lg={4} xl={3}>
            <Card onClick={() => navigate(`/product/${_id}`)} className="card-preview my-1 p-2 rounded">
                <Card.Img src={`${product.image}`} variant="top" className="p-2" />
                <Card.Body>
                    <Card.Title>{getTextCut(product.name, 45)}</Card.Title>
                    <Row>
                        <Col xs={7}>
                            <Rating avg={product.rating} total={product.reviewCount} ></Rating>
                        </Col>
                        <Col>
                            <Card.Text as="h3" className="text-end">${product.price}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <Button disabled={!product.inStockCount} onClick={(ev) => onAddToCart(ev, _id)} variant="primary">Add to Cart</Button>
            </Card>
        </Col>
    );
};
