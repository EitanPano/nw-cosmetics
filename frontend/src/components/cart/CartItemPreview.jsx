import { Row, Col, Image } from 'react-bootstrap';

import { QuantityInput } from './QuantityInput';

export const CartItemPreview = ({ item, onUpdateCartItem, onRemoveFromCart }) => {

    const onChangeQty = (qty) => {
        onUpdateCartItem({ ...item, quantity: qty })
    }

    return (
        <Row>
            <Col xs={4}>
                <Image src={item.image} fluid></Image>
            </Col>
            <Col className='d-flex flex-column justify-content-between'>
                <Row>
                    <h5 className='col-10'>{item.name}</h5>
                    <button onClick={() => onRemoveFromCart(item._id)} className='col-2 ms-auto mb-auto btn-nude'>
                        <i className="fa-solid fa-trash text-secondary"></i>
                    </button>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col>
                        <p className='price-by-qty'>
                            ${item.price * item.quantity}
                            {item.quantity > 1 && <span> ${item.price}x{item.quantity}</span>}
                        </p>
                    </Col>
                    <Col xs={7} md={6}>
                        <QuantityInput onChangeQty={onChangeQty} quantity={item.quantity} inStockCount={item.inStockCount} max={5} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
