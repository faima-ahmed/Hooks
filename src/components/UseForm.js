import React, { useEffect, useRef } from 'react';

function UseForm(props) {
const inputRef= useRef(null);
const headerRef= useRef(null);

    useEffect(() =>{
       headerRef.current.style.color='purple'
    }, [])
    
    let handleInput=()=>{
        inputRef.current.focus();
        inputRef.current.value='1000';
        inputRef.current.style.background='gray'

    }
    return (
        <div>
            <h1 ref={headerRef}>Learn useRef</h1>
           <p>
            <input ref={inputRef} type='text' placeholder='enter something'/>
            <button onClick={handleInput}>Submit</button>
            </p> 
        </div>
    );
}

export default UseForm;