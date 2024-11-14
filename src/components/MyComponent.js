/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';



function MyComponent(props) {

    const [count, setCount]= useState(0);
    // const[text, setText]= useState('');

    useEffect(()=>{
        console.log('updating document title');
        document.title=`Clicked ${count} times`;
    }, [count]);

    const addClick=()=>{
        setCount((prevCount)=> prevCount+1);
    }; 
    return (
        <div>
            {/* <p>
                <input type='text' value={text} onChange={(e)=> setText(e.target.value)}/>
            </p> */}
            <p>
                <button type='button' onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}

export default MyComponent;