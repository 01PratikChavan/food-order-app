import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContextProvider';
import modalContext from '../store/ModalContextProver';

export default function Header() {

    const {items} = useContext(CartContext);
    const modalCtx = useContext(modalContext) ;

    const handleCartOpen=()=>{
      modalCtx.showCart();
    }

  return (
  
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order App</h1>
      </div>
        <Button onClick={handleCartOpen}  textOnly>Cart {items.length}</Button>
    </header>

  );
}