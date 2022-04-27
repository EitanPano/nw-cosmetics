import { Button, Card, Col, Row } from 'react-bootstrap';
import { getTextCut } from '../../services/utils';
import { Rating } from '../Rating';

export const ProductPreview = ({ product }) => {
    return (
        <Col sm={6} md={6} lg={4} xl={3}>
            <Card className="card-preview my-1 p-2 rounded">
                <Card.Img src={`${product.image}`} variant="top" className="p-2" />
                <Card.Body>
                    <Card.Title>{getTextCut(product.name, 45)}</Card.Title>
                    <Row>
                        <Col xs={7}>
                            <Rating
                                avg={product.rating}
                                total={product.reviewCount}
                            ></Rating>
                        </Col>
                        <Col>
                            <Card.Text as="h3" className="text-end">${product.price}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <Button variant="primary">Add to Cart</Button>
            </Card>
        </Col>
    );
};
