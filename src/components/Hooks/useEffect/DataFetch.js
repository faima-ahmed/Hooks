import React, { useEffect, useState } from 'react';

const loadingMessage= <p>todos is loading</p>
const errorMessage= <p>{error}</p>

function DataFetch(props) {
    const [todos, setTodos] = useState(null);
    const [isloading, setIsLoading]=useState(true);
    const [error, setError]= useState(false);

    useEffect(()=>{
        setTimeout(()=>{
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
                setError(null)
            })
            .catch((error) =>{
                isloading(error.message)
                setIsLoading(false);
            })
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