const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';

const booksReducer = (state = [], action) => {
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

const nextBookId = 0;
export const addBook = (title, author) => ({
  type: ADD_BOOK,
  id: nextBookId + 1,
  title,
  author,
});

export const deletBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
