import React, { useState } from "react";

const booksData = [
  { id: 1, name: "Pather panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "srikanta" },
];
const UseReducer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");

 const handleSubmit=(e)=>{
   e.preventDefault();
   alert(bookName);
  }
  return (
    <div>
        <h1>Book List</h1>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={bookName}
      onChange={(e) => {
          setBookName(e.target.value);
        }}
        />
    <button type="submit">Add Book</button>
  </form>
      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default UseReducer;
