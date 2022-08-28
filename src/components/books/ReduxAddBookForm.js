import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBooks } from '../../redux/books/books';

const ReduxAddBookForm = () => {
  const dispatch = useDispatch();
  const initalState = {
    title: '',
    author: '',
    category: '',
  };

  const [currentState, setState] = useState(initalState);

  const onChange = (event) => {
    setState({
      ...currentState, [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentState.title.trim() && currentState.author.trim() && currentState.category.trim()) {
      const { title, author, category } = currentState;
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(postBooks(newBook));
    }
  };

  return (
    <div className="redux-add-book-div">
      <h2 className="redux-book-list-h2 grey-color">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="redux-add-form-input redux-add-form-margin"
          type="text"
          placeholder="Book title"
          name="title"
          value={currentState.title}
          onChange={onChange}
          required
        />
        <input
          className="redux-add-form-input redux-add-form-margin"
          type="text"
          placeholder="Author"
          name="author"
          value={currentState.author}
          onChange={onChange}
          required
        />
        <input
          className="redux-add-form-input"
          type="text"
          placeholder="Category"
          name="category"
          value={currentState.category}
          onChange={onChange}
          required
        />
        <br />
        <br />
        <br />
        <hr className="hr" />
        <div className="redux-add-form-btn-margin">
          <button
            className="redux-book-btn white-color"
            onClick={handleSubmit}
            type="submit"
          >
            Add new book
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReduxAddBookForm;
