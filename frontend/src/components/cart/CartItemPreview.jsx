import { Row, Col, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../store/cart/actions';
import { QuantityInput } from './QuantityInput';

export const CartItemPreview = ({ item }) => {

    const dispatch = useDispatch()

    const onChangeQty = (qty) => {
        // console.log('ev', ev)
        dispatch(changeQuantity(item._id, qty))
    }


    return (
        <Row>
            <Col xs={4}>
                <Image src={item.image} fluid></Image>
            </Col>
            <Col className='d-flex flex-column justify-content-between'>
                <h5 className=''>{item.name}</h5>
                <Row className="d-flex align-items-center">
                    <Col xs={6}>
                        <p className='price-by-qty'>
                            ${item.price * item.quantity}
                            {item.quantity > 1 && <span> ${item.price}x{item.quantity}</span>}
                        </p>
                    </Col>
                    <Col xs={6}>
                        <QuantityInput onChangeQty={onChangeQty} quantity={item.quantity} inStockCount={item.inStockCount} max={5} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
