import React from 'react'
import { useState } from 'react'
import "./counter.css" ;

export default function Counter() {
    
    let [counter, setCounter]  = useState(15)
    const inc=()=>{
        if(counter<100)
        setCounter(counter+1)
    }
    const dec=()=>{
      if(counter>0)  
      setCounter(counter-1)
    }
    const reset=()=>{
      setCounter(0)
    }
       
    return (
    
        <div className='box1'>
            <h1 > counter: {counter} </h1>
            <button className='' onClick={inc} > Increase </button>
      
            <button    onClick={dec}  > Decrease </button>
            <button    onClick={reset}  > Reset  </button>
        </div>
        
      )
}
