import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { GoBack } from '../GoBack';
import { Loader } from '../Loader';
import { Message } from '../Message';
import { CartItemPreview } from './CartItemPreview';

export const CartItemList = ({ cartItems, onRemoveFromCart, onUpdateCartItem }) => {
    if (cartItems && !cartItems.length)
        return (
            <Message>
                <p>Your cart is empty. </p>
                <GoBack></GoBack>
            </Message>
        );
    else if (!cartItems || !cartItems.length) return <Loader></Loader>;

    return (
            <ListGroup variant="flush">
                {cartItems.map((item) => (
                    <ListGroupItem key={item._id}>
                        <CartItemPreview item={item} onUpdateCartItem={onUpdateCartItem} onRemoveFromCart={onRemoveFromCart} />
                    </ListGroupItem>
                ))}
            </ListGroup>
    );
};
