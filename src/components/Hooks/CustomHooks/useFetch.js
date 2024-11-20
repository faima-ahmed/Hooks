import React, { useEffect, useState } from 'react';

const useFetch = () => {
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
};

export default useFetch;