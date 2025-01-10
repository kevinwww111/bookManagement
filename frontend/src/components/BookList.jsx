import React from "react";

function BookList({ books, onDelete, onEdit }) {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => onEdit(book.id)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;