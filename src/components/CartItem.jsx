import React, { useContext } from 'react'
import CartContext from '../store/CartContextProvider'

const CartItem = ({
    name ,
    qunatity ,
    price,
    onIncrement,
    ondecrement
}) => {

  const  cartCtx=useContext(CartContext) ;

  return (
    <li className='cart-item'>
      <p>
        {name} -{qunatity} X {`₹${price}`}
      </p>
      <p className='cart-item-actions'>
           <button onClick={onIncrement} >+</button>
           <span>{qunatity}</span>
           <button onClick={ondecrement} >-</button>
      </p>
      
    </li>
  )
}

export default CartItem
