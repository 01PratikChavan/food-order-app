import React, { useEffect, useRef }  from 'react'
import {createPortal} from 'react-dom'
const Modal = ({children , open , className=''}) => {

    const dialogRef=useRef();

    useEffect(()=>{
        if(open){
          dialogRef.current.showModal();
        }
        return()=>dialogRef.current.close();
    } ,[open]);

  return createPortal(

    <dialog ref={dialogRef} className={`modal ${className}`}  >
          
          {children}

    </dialog>
    ,  
    document.getElementById('modal')
  )
}

export default Modal
