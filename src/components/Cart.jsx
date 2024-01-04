import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContextProvider'
import Button from './UI/Button';
import CartItem from './CartItem';
import modalContext from '../store/ModalContextProver';

const Cart = () => {

   const cartCtx= useContext(CartContext);
   const modalCtx = useContext(modalContext) ;

   const totalPrice = cartCtx.items.reduce((totalPrice,item)=>totalPrice+item.quantity*item.price ,0)



  return (
    <Modal className='cart' open={modalCtx.progress==='cart'}  >
        <h2>You cart</h2>
         <ul>
             {cartCtx.items.map((item)=>(
      <CartItem 
       key={item.id}
       name={item.name}
       qunatity={item.quantity}
       price={item.price} 
       ondecrement={()=>cartCtx.removeItem(item.id)}
       onIncrement={()=>cartCtx.addItem(item)}
      />
            ))}
           
         </ul>
         <p className='cart-total'>{`₹${totalPrice}`}</p>
         <p className='modal-actions'>
                <Button  onClick={()=>modalCtx.hideCart()} textOnly>Close</Button>
                <Button>Go to Checkout</Button>
         </p>
    </Modal>
  )
}

export default Cart
