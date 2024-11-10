import React, { useEffect, useState } from 'react';

function DataFetch(props) {
    const [todos, setTodos] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos');
    })
    return (
        <div>
            <h1>DataFetch</h1>
        </div>
    );
}

export default DataFetch;