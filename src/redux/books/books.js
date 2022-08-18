const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';
const GET_CURRENT_BOOKS = 'appBook/books/GET_CURRENT_BOOKS';
const GET_CURRENT_BOOKS_SUCCESS = 'appBook/books/GET_CURRENT_BOOKS_SUCCESS';
const GET_CURRENT_BOOKS_FAILURE = 'appBook/books/GET_CURRENT_BOOKS_FAILURE';
import API from "../../api/Api";
import axios from "axios";

const initialBooks = [];
const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case GET_CURRENT_BOOKS_SUCCESS:
      return [...state];

    case ADD_BOOK:
      return [...state, action.books];

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

 export const fetchBooks = () => {
  return (dispatch) => {    
    dispatch({ type: GET_CURRENT_BOOKS });
    return axios.get(API).then(  
      books => dispatch({ type: GET_CURRENT_BOOKS_SUCCESS, books }),
      err => dispatch({ type: GET_CURRENT_BOOKS_FAILURE, err })
    );
  };
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
