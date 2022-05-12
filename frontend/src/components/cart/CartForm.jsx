import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setUserMessage } from '../../store/user/actions'
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';


export const CartForm = ({price, inStockCount, addToCart}) => {
    const dispatch = useDispatch()
    const [cartForm, handleChange] = useForm({quantity: 1})

    const isInStock = () => inStockCount > 0 ? true : false;
    const setQuantity = (ev) => {
        let quantity = ev.target.value

        if (quantity >= 10) {
            const secNum = ev.target.value.split('')[1]
            quantity = (secNum >= 5 ) ? 5 : secNum;
        } 
        else if (quantity >= 5) quantity = 5

        if (quantity <= 0) quantity = 1
        if (quantity > inStockCount) {
            quantity = inStockCount;
            dispatch(setUserMessage('Almost out of stock'))
        } 

        ev.target.value = quantity
        ev.target.type = 'number'

        handleChange(ev)
    }


    if (!cartForm) return null
    return (
        <Col lg={3}>
                <form className='cart-form'>
                <ListGroup variant="">
                    <ListGroupItem>
                        <Row>
                            <Col><p>Price:</p></Col>
                            <Col className="text-end"><p>${price}</p></Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col><p>In-Stock:</p></Col>
                            <Col className="text-end"><p>{isInStock() ? '✓' : '✘'}</p></Col>
                        </Row>
                    </ListGroupItem>
                    { isInStock() && (
                    <ListGroupItem>
                        <Row>
                            <Col className="text-start d-flex align-items-center">
                                <label htmlFor="quantity">Quantity:</label>
                            </Col>
                            <Col className="text-end">
                                <input id="quantity" name="quantity" onChange={setQuantity} value={cartForm.quantity} type="text" className="text-center" />
                            </Col>
                        </Row>
                    </ListGroupItem>
                    )}
                    <ListGroupItem>
                        <Row>
                            <Button onClick={() => addToCart(1)} disabled={!isInStock()} className="btn-block" >
                                Add to Cart
                            </Button>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </form>
        </Col>
    );
};
