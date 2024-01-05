import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContextProvider";
import { ModalContextProvider } from "./store/ModalContextProver";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <ModalContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout/>
    </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
