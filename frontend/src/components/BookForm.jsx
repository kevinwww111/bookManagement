import React, { useState } from "react";

function BookForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    author: initialData.author || "",
    year: initialData.year || "",
    isbn: initialData.isbn || "",
    summary: initialData.summary || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>ISBN</label>
        <input
          type="text"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Summary</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;