import React from "react";
import BookForm from "../components/BookForm";

function EditBook() {
  const handleEditBook = (data) => {
    console.log("Editing book:", data);
    // Edit book logic here
  };

  const initialData = {
    // Fetch and populate initial book data
    title: "Sample Title",
    author: "Sample Author",
    year: 2020,
    isbn: "1234567890",
    summary: "Sample Summary",
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm initialData={initialData} onSubmit={handleEditBook} />
    </div>
  );
}

export default EditBook;