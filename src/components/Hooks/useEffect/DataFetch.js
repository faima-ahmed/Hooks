import React, { useEffect, useState } from 'react';

const loadingMessage= <p>todos is loading</p>

function DataFetch(props) {
    const [todos, setTodos] = useState(null);
    const [isloading, setIsLoading]=useState(true);
    const [error, setError]= useState(false);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if (!res.ok){
                throw Error('fetching is not successful');
            }
           else{
            return res.json();
           }
        })
        .then((data) => {
            setTodos(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error) =>{
            setError(error.message)
            setIsLoading(false);
        })
    }, [])

    const todosElement=todos && todos.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
     })
    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p>}
            {isloading && loadingMessage}
            {todosElement}
        </div>
    );
}

export default DataFetch;