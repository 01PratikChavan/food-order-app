import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContextProvider';

export default function Header() {

    const {items} = useContext(CartContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order App</h1>
      </div>
        <Button textOnly={true}>Cart {items.length}</Button>
    </header>
  );
}