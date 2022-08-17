import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import API from '../../api/Api';

const ReduxAddBookForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    author: '',
    category: '',
  };

  const [currentState, setState] = useState(initialState);

  const onChange = (event) => {
    setState({
      ...currentState, [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (currentState.title.trim() && currentState.author.trim() && currentState.category.trim()) {
      const { title, author, category } = currentState;
      const newBook = await axios.post(API, {
        item_id: uuidv4(),
        title,
        author,
        category,
      });
      dispatch(addBook(newBook));
      window.location.reload();
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        value={currentState.title}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={currentState.author}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={currentState.category}
        onChange={onChange}
        required
      />
      <button
        onClick={handleSubmit}
        type="button"
      >
        Add new book
      </button>
    </form>
  );
};

export default ReduxAddBookForm;
