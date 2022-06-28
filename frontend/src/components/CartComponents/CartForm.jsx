import { useForm } from '../../hooks/useForm';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { QuantityInput } from './QuantityInput';


export const CartForm = ({product, onAddToCart}) => {
    const [cartForm, handleChange, setCartForm] = useForm({quantity: 1})
    const isInStock = () => product.inStockCount > 0 ? true : false;

    const onChangeQty = (qty) => {
        setCartForm({...cartForm, quantity: qty})
    }


    if (!product) return null;
    const { quantity } = cartForm;
    return (
        <Col lg={4} xl={3}>
                <form className='cart-form'>
                <ListGroup variant="">
                    <ListGroupItem>
                        <Row>
                            <Col><p>Price:</p></Col>
                            <Col className="text-end"><p>${product.price}</p></Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col xs={8}><p>{isInStock() ? 'In-Stock:' : 'Out of Stock:'}</p></Col>
                            <Col className="text-end"><p>{isInStock() ? '✓' : '✘'}</p></Col>
                        </Row>
                    </ListGroupItem>
                    { isInStock() && (
                    <ListGroupItem>
                        <Row>
                            <Col className="text-start d-flex align-items-center">
                                <label htmlFor="quantity">Quantity:</label>
                            </Col>
                            <Col>
                                <QuantityInput quantity={quantity} handleChange={handleChange} onChangeQty={onChangeQty} inStockCount={product.inStockCount} />
                            </Col>
                        </Row>
                    </ListGroupItem>
                    )}
                    <ListGroupItem>
                        <Row>
                            <Button onClick={() => onAddToCart(quantity)} disabled={!isInStock()} className="btn-block" >
                                Add to Cart
                            </Button>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </form>
        </Col>
    );
};
