
import { createContext, useState } from "react";

const modalContext = createContext({
     progress:'' ,
     showCart:()=>{},
     hideCart:()=>{},
     showCheckout:()=>{},
     hideCheckout:()=>{} 
})

export function ModalContextProvider({children}){

    const [modal,setModal]=useState('');

    function showCart(){
          setModal('cart');
    }
    function hideCart(){
        setModal('');
    }

    function showCheckout(){
        setModal('checkout');
    }
    function hideCheckout(){
        setModal('');
    }

    const modalCtx = {
        progress:modal ,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout 
    }

    return (
        <modalContext.Provider value={modalCtx}>
           {children}
        </modalContext.Provider>
    )
}

export default modalContext ;