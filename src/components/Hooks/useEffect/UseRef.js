import React, { useEffect, useRef } from 'react';

function UseRef(props) {
const inputRef= useRef(null);

    useEffect(() =>{
      inputRef.current.focus();
    }, [])
    
   
    return (
        <div>
           <p>
            <input ref={inputRef} type='text' placeholder='enter something'/>
            </p> 
        </div>
    );
}

export default UseRef;