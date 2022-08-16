import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const ReduxAddBook = () => {
  const dispatch = useDispatch();
  const initalState = {
    title: '',
    author: '',
  };

  const [currentState, setState] = useState(initalState);

  const onChange = (event) => {
    setState({
      ...currentState, [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentState.title.trim() || currentState.author.trim()) {
     const title = currentState.title;
     const author = currentState.author
      dispatch(addBook(title, author));
      setState({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={currentState.title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={currentState.author}
          onChange={onChange}
        />
        <button
          onClick={handleSubmit}
          type="button"
        >
          Add new book
        </button>
      </form>
    </div>
  );
};

export default ReduxAddBook;
