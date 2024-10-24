import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isloading, setIsLoading]=useState(true);
    const [error, setError]= useState(false);

    useEffect(()=>{
        fetch(url)
        .then((res) => {
            if (!res.ok){
                throw Error('fetching is not successful');
            }
           else{
            return res.json();
           }
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error) =>{
            setError(error.message)
            setIsLoading(false);
        })
    }, [url])

    return {data, isloading, error}
};

export default useFetch;