import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, retrieveBooks } from '../../redux/books/books';

const ReduxAddBookForm = () => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.books);
  // console.log( book, books);
  // const initalState = {};
  const [currentState, setState] = useState(initalState);
  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  // console.log(currentState, "currstate");

  const onChange = (event) => {
    setState({
      ...currentState, [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentState.title.trim() && currentState.author.trim()) {
      const { title, author } = currentState;
      dispatch();
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
