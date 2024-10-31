import React, { useEffect, useState } from 'react';

const loadingMessage= <p>todos is loading</p>

function DataFetch(props) {
    const [todos, setTodos] = useState(null);
    const [isloading, setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
                
            });
        }, 2000)
    }, [])

    const todosElement=todos && todos.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
     })
    return (
        <div>
            <h1>Todos</h1>
            {todosElement}
            {isloading && loadingMessage}
        </div>
    );
}

export default DataFetch;