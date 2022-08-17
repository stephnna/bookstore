const FETCH_API = 'appBook/books/FETCH_API';
const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';

const initialBooks = [];
const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case FETCH_API:
      return [...state];

    case ADD_BOOK:
      return [...state, action.book];

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const fetchBooks = () => ({ type: FETCH_API });

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
