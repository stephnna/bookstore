import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';
import { GetBooksFromApi } from '../../redux/books/books';

const ReduxBooks = () => {
  const { loading, books, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBooksFromApi());
  },
  [dispatch]);

  const displayBooks = () => {
    if (error) {
      return (
        <div className="redux-book-loading">
          <span>
            Oops!
            {' '}
            {error.message}
            !
          </span>
        </div>
      );
    }
    if (loading) return <div className="redux-book-loading"><span>Loading...</span></div>;
    return (
      <div>
        <ul>
          {books.map((book) => (
            <ReduxBookList
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              key={book.item_id}
            />
          ))}
        </ul>
        <ReduxAddBookForm />
      </div>
    );
  };
  return <>{displayBooks()}</>;
};

export default ReduxBooks;
