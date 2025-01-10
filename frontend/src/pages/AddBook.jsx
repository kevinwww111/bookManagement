import React from "react";
import BookForm from "../components/BookForm";

function AddBook() {
  const handleAddBook = (data) => {
    console.log("Adding book:", data);
    // Add book logic here
  };

  return (
    <div>
      <h1>Add Book</h1>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
}

export default AddBook;