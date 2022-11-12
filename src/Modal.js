import React from "react";
import './index.css';
import ReactDom from 'react-dom'
export default function Modal(props)
{   

    
    console.log(props.open)
    if(props.open=='no') return null
    
    // if(lol.lol==false) return null
    return ReactDom.createPortal(
      
        
      <div class="fixed top-0 bottom-0 right-0 left-0 bg-blackbg">
        <div class="w-2/3 h-2/3 rounded-3xl bg-pink-200 fixed top-32 right-64">
            <div class="flex flex-row justify-between">
                <h2 class="text-center px-64 py-4">Login</h2>
                <button class="text-black font-bold" onClick={props.onClose}>x</button>
            </div>
            
            <p>lorem ipsumaaffnowa naowijd oiqeff qpD</p>
        </div>
      </div>,
      document.getElementById('portal')
      
  )
}