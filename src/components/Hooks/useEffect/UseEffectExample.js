import React, { useEffect, useState } from 'react';

function UseEffectExample(props) {
    const [count, setCount]= useState(0);
  
// const handleOnClick =()=>{
//     setCount((count)=> count+1);
// }

useEffect(() =>{
    console.log('useEffect');
})
    return (
        <div>
            {console.log('rendering')}
            <h1>Count:{count}</h1>
            <button onClick={()=>{setCount((count)=> count+1)}}>+</button>
        </div>
    );
}

export default UseEffectExample;