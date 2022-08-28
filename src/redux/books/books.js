import axios from 'axios';
import API from '../../api/Api';

const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';
const FETCH_BOOKS_BEGINS = 'appBook/books/FETCH_BOOKS_BEGINS';
const FETCH_BOOKS_SUCCESS = 'appBook/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAILURE = 'appBook/books/FETCH_BOOKS_FAILURE';

const initialBooks = {
  books: [],
  loading: false,
  error: null,
};

const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case FETCH_BOOKS_BEGINS: // Mark the state as "loading" so we can show a spinner

      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        books: action.books,
      };

    case FETCH_BOOKS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      return {
        ...state,
        loading: false,
        error: action.error,
        books: [],
      };

    case ADD_BOOK:
      return {
        ...state,
        loading: true,
        error: action.error,
        books: action.book,
      };

    case DELETE_BOOK:
      return {
        ...state,        
        books: state.books.filter((item) => item.item_id !== action.id),
      };
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const loadingBooks = () => ({
  type: FETCH_BOOKS_BEGINS,
});

export const fetchBook = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  error,
});

export const postBooks = (book) => async (dispatch) => {
  dispatch(loadingBooks());
  try {
    await axios.post(API, book);
    dispatch(addBook(book));
    window.location.reload();
  } catch (error) {
    dispatch(fetchBooksFailure(error));
  }
};

export const GetBooksFromApi = () => async (dispatch) => {
  dispatch(loadingBooks());
  try {
    const booksObj = await axios.get(API);
    const newBooks = [];
    if (booksObj.data) {
      Object.keys(booksObj.data).forEach((itemKeys) => {
        const data = booksObj.data[itemKeys];
        const books = Object.assign({}, ...data, { item_id: itemKeys });
        newBooks.push(books);
      });
      dispatch(fetchBook(newBooks));
    }
  } catch (error) {
    dispatch(fetchBooksFailure(error));
  }
};

export const deleteBookFromApi = (id) => async (dispatch) => {
  dispatch(loadingBooks());
  try {
    await axios.delete(`${API}/${id}`, { item_id: id });
    dispatch(deleteBook(id));
    window.location.reload();
  } catch (error) {
    // dispatch(fetchBooksFailure(error));
  }
};

export default booksReducer;
