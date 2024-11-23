import React, { useState } from 'react';
  
const booksData=[
    {id:1, name:'Pather panchal'},
    {id:2, name:'Padma Nadir Majhi'},
    {id:3, name:'srikanta'},
]
const UseReducer = () => {
    const [books, setBooks]= useState(booksData);

    return (
        <div>
           <h1>Book List</h1>
           {books.map((book)=>{
            const{id, name}=book;
            return <li key={id}>{name}</li>
           })}
        </div>
    );
};

export default UseReducer;