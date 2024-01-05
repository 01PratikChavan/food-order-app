import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContextProvider";
import Button from "./UI/Button";
import CartItem from "./CartItem";
import modalContext from "../store/ModalContextProver";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(modalContext);

  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart(){
    modalCtx.hideCart();
  }

  return (
    <Modal className="cart" open={modalCtx.progress === "cart"} onClose={modalCtx.progress==='cart'?handleCloseCart:null} >
      <h2>You cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            qunatity={item.quantity}
            price={item.price}
            ondecrement={() => cartCtx.removeItem(item.id)}
            onIncrement={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{`₹${totalPrice.toFixed(2)}`}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        {
          cartCtx.items.length >0  &&  (
            <Button onClick={() => modalCtx.showCheckout()}>Go to Checkout</Button>
          )
        }
      </p>
    </Modal>
  );
};

export default Cart;
