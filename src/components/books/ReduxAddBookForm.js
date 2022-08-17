import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const ReduxAddBookForm = () => {
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

    if (currentState.title.trim() && currentState.author.trim()) {
      const { title, author } = currentState;
      dispatch(addBook(title, author));
      setState({
        title: '',
        author: '',
      });
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
