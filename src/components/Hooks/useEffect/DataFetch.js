import React, { useEffect, useState } from 'react';

function DataFetch(props) {
    const [todos, setTodos] = useState(null);
    const [isloading, setIsLoading]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setTodos(data);
            setIsLoading(false);
            console.log(todos);
        });
    }, [])

    const todosElement=todos && todos.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
     })
    return (
        <div>
            <h1>Todos</h1>
            {todosElement}
            
        </div>
    );
}

export default DataFetch;