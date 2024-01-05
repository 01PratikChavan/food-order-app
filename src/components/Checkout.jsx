import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContextProvider'
import modalContext from '../store/ModalContextProver';
import { currencyFormatter } from '../utils/formattedPrice';
import Input from './UI/Input';
import Button from './UI/Button';

const Checkout = () => {
      const modalCtx =useContext(modalContext);
      const cartCtx = useContext(CartContext);

      const totalPrice = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );

    function handleClose(){
      modalCtx.hideCheckout();
    }

  return (
    <Modal className='cart' open={modalCtx.progress==='checkout'} onClose={handleClose}>
        <form > 
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(totalPrice)}
            </p>
          
         
          <Input label='Full Name' type='text' id='full-name'  />
          <Input label='Email' type='email' id='email'  />
          <Input label='Street Address' type='text' id='street'  />
          <div className='control-row'>
          <Input label='Postal Code' type='text' id='postal-code'  />
          <Input label='City' type='text' id='city'  />

          </div>

          <p className='modal-actions'>
            <Button  type='button' textOnly onclick={handleClose}>
              Close
            </Button>
            <Button >
            Submit Order
            </Button>

          </p>
              
        </form>
      
    </Modal>
  )
}

export default Checkout
