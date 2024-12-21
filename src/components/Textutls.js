import React from 'react'
import {useState} from 'react'
export default function Textutls() {
    
    let [text,setText]=useState("hello")
        // setText("ramram")
    
    const handleonchange=(event)=>{
        setText(event.target.value)
    
    }    


    const upper=()=>{
        text=text.toUpperCase()
        setText(text);
    }
    
    const lower=()=>{
        text=text.toLowerCase()
        setText(text);
    }
    
    const clear=()=>{
        setText(" ");
   }
    return (
        <div>
        <div className='bg-black'>
        <h2 className='text-white'> Enter your text here: </h2>
        <div className="form-group ">
        <textarea className="form-control bg-info" value={text}  onChange={handleonchange} id="box" rows="8"></textarea>
        </div>
         {/* <h1>  {text}   </h1> */}
         <button onClick={upper}> uppercase   </button>
         <button onClick={lower}> lowercase   </button>
         <button onClick={clear}> clear   </button>
        </div>
      </div>
  )
}

