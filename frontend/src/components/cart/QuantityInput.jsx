import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setUserMessage } from '../../store/user/actions';

export const QuantityInput = ({onChangeQty, quantity, inStockCount, max}) => {

    const dispatch = useDispatch()
    const inputRef = useRef()
    const [itemForm, handleChange, setItemForm] = useForm({quantity})
    

    useEffect(() => {
    
    }, [itemForm])
    

    const setQuantity = (ev) => {
        let quantity = ev.target.value

        if (quantity >= 10) {
            const secNum = ev.target.value.split('')[1]
            quantity = (secNum >= max ) ? max : secNum;
        } 
        else if (quantity >= max) quantity = max

        if (quantity <= 0) quantity = 1
        if (quantity > inStockCount) {
            quantity = inStockCount;
            dispatch(setUserMessage('Almost out of stock', 'success'))
        } 

        ev.target.value = quantity
        ev.target.type = 'number'

        handleChange(ev)
        onChangeQty(quantity)
    }

    const diffQuantity = (ev) => {
        ev.preventDefault()
        let value = +inputRef.current.value
        if (ev.target.innerText === '+') {
            if (value + 1 > inStockCount) return dispatch(setUserMessage('Almost out of stock'))
            else if(value >= 5) return
            value++
        }
        else {
            if (value <= 1 ) return
            value--
        }
        onChangeQty(value)
        setItemForm({quantity: value})
    }



  return (
    <form onChange={setQuantity} className='quantity-input'>
        <button onClick={diffQuantity} className='inc'>+</button>
        <input ref={inputRef} onChange={setQuantity} value={itemForm.quantity} id='quantity' name='quantity' type="text" />
        <button onClick={diffQuantity} className='dec'>-</button>
    </form>
  )
}
