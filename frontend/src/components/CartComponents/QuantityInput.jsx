import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUserMessage } from '../../store/user/actions';

export const QuantityInput = ({quantity, onChangeQty, handleChange=(ev)=>{}, inStockCount, max = 5}) => {

    const dispatch = useDispatch();
    const inputRef = useRef();

    const setQuantity = (ev) => {
        let quantity = ev.target.value;

        if (quantity >= 10) {
            const secNum = ev.target.value.split('')[1];
            quantity = (secNum >= max ) ? max : secNum;
        } 
        else if (quantity >= max) quantity = max;

        if (quantity <= 0) quantity = 1;
        if (quantity > inStockCount) {
            quantity = inStockCount;
            dispatch(setUserMessage('Almost out of stock', 'success'));
        } 

        ev.target.value = quantity;
        ev.target.type = 'number';

        handleChange(ev);
        onChangeQty(+quantity);
    }

    const diffQuantity = (ev) => {
        ev.preventDefault();
        console.log(inStockCount);
        let value = +inputRef.current.value;
        if (ev.target.innerText === '+') {
            if (value + 1 > inStockCount) return dispatch(setUserMessage('Almost out of stock'));
            else if(value >= 5) return;
            value++;
        }
        else {
            if (value <= 1 ) return;
            value--;
        }
        onChangeQty(value);
    }



  return (
    <div className='quantity-input'>
        <button disabled={quantity >= max} onClick={diffQuantity} className='inc'>+</button>
        <input ref={inputRef} onChange={setQuantity} value={quantity} id='quantity' name='quantity' type="text" />
        <button disabled={quantity <= 1} onClick={diffQuantity} className='dec'>-</button>
    </div>
  );
};
