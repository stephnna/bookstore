import React from 'react';
import { postBooks } from '../../redux/books/books';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

const ReduxAddBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, category } = event.target.elements;
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };

    dispatch(postBooks(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        name="title"        
        required
      />
      <input
        type="text"
        placeholder="Author"
        name="author"        
        required
      />
      <input
        type="text"
        placeholder="Category"
        name="category"        
        required
      />
      <button
        onClick={handleSubmit}
        type="submit"
      >
        Add new book
      </button>
    </form>
    </div>
  );
};

export default ReduxAddBookForm;
