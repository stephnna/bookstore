import axios from 'axios';
import API from '../../api/Api';

const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';
const GET_CURRENT_BOOKS = 'appBook/books/GET_CURRENT_BOOKS';
const GET_CURRENT_BOOKS_SUCCESS = 'appBook/books/GET_CURRENT_BOOKS_SUCCESS';
const GET_CURRENT_BOOKS_FAILURE = 'appBook/books/GET_CURRENT_BOOKS_FAILURE';

const initialBooks = [];
const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case GET_CURRENT_BOOKS_SUCCESS:
      return [...state, action.books];

    case ADD_BOOK:
      return [...state.books, action.book];
      

      // {books.map((itemArr) => (
      //   itemArr.map((book) => (

    case DELETE_BOOK:
      return     [...state,
                state.filter((book) =>  console.log(book.tile))]
    
      

    default:
      return state;
  }
};

export const postBooks = (book) => async (dispatch) => {
  book = await axios.post(API);
  // fetch(URL, {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'applicaion/json',
  //   },
  //   body: JSON.stringify((book)),
  // }).then(() => {
    dispatch(addBook(book));
  // });
};


export const BooksFromApi = () => async (dispatch) => {
  dispatch({ type: GET_CURRENT_BOOKS });
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
};

export const deleteFromApi = (id) => async (dispatch) => {
  // JSON.stringify({ item_id: id })
  await axios.delete(`${API}/${id}`);
  dispatch(deleteBook(id));
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const fetchBook = (books) => ({
  type: GET_CURRENT_BOOKS_SUCCESS,
  books,
});

export default booksReducer;
