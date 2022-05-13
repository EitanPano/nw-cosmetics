import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { GoBack } from '../GoBack';
import { Loader } from '../Loader';
import { Message } from '../Message';
import { CartItemPreview } from './CartItemPreview';

export const CartItemList = ({ cartItems }) => {
    if (cartItems && !cartItems.length)
        return (
            <Message>
                <p>Your cart is empty. </p>
                <GoBack></GoBack>
            </Message>
        );
    else if (!cartItems || !cartItems.length) return <Loader></Loader>;

    return (
        <Col className='ms-auto' md={7} lg={6} xl={5} xxl={4}>
            <ListGroup variant="flush">
                {cartItems.map((item) => (
                    <ListGroupItem key={item._id}>
                        <CartItemPreview item={item} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Col>
    );
};
