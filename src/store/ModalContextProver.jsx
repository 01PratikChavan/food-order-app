
import { createContext, useState } from "react";

const modalContext = createContext({
     progress:'' ,
     showCart:()=>{},
     hideCart:()=>{},
     showCheckBox:()=>{},
     hideCheckBox:()=>{} 
})

export function ModalContextProvider({children}){

    const [modal,setModal]=useState('');

    function showCart(){
          setModal('cart');
    }
    function hideCart(){
        setModal('');
    }

    function showCheckBox(){
        setModal('checkbox');
    }
    function hideCheckBox(){
        setModal('');
    }

    const modalCtx = {
        progress:modal ,
        showCart,
        hideCart,
        showCheckBox,
        hideCheckBox 
    }

    return (
        <modalContext.Provider value={modalCtx}>
           {children}
        </modalContext.Provider>
    )
}

export default modalContext ;