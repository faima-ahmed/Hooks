import React, { useEffect, useState } from 'react';

function UseEffectExample(props) {
    const [count, setCount]= useState(0);
    const [isLoading, setIsLoading]= useState(false);
  
// const handleOnClick =()=>{
//     setCount((count)=> count+1);
// }

useEffect(() => {
    console.log('useEffect');
},[count]);
    return (
        <div>
            {console.log('rendering')}
            <h1>Count:{count}</h1>
            <button onClick={()=>{setCount((count)=> count+1)}}>+</button>
            <button onClick={()=>{setIsLoading(!isLoading)}}>isLoading</button>
        </div>
    );
}

export default UseEffectExample;