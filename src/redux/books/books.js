import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';

const initialBooks = [
  {
    id: uuidv4(),
    title: 'My Awesome book 1',
    author: 'Ezea Chinedu',
  },

  {
    id: uuidv4(),
    title: 'My Awesome book 2',
    author: 'Ezea Ginika',
  },

  {
    id: uuidv4(),
    title: 'My Awesome book 3',
    author: 'Ezea Stephen',
  },
];

const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  id: uuidv4(),
  title,
  author,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
