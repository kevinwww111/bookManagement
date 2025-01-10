import React, { useState } from "react";
import BookList from "../components/BookList";

function Home() {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = (id) => {
    // Navigate to edit page (use a router for actual implementation)
    console.log(`Editing book with ID: ${id}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default Home;