import React, { useState } from 'react';

function UseEffectExample(props) {
    const [count, setCount]= useState(0);
  
const handleOnClick =()=>{
    setCount((count)=> count+1);
}
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleOnClick}>+</button>
        </div>
    );
}

export default UseEffectExample;