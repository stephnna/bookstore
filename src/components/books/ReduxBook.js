import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';
import { GetBooksFromApi } from '../../redux/books/books';

const ReduxBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBooksFromApi());
  },
  [dispatch]);

  return (
    <div>
      <ul>
        {books.map((itemArr) => (
          itemArr.map((book) => (
            <ReduxBookList
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              key={book.item_id}
            />
          ))))}
      </ul>
      <h1>ADD NEW BOOK</h1>
      <ReduxAddBookForm />
    </div>
  );
};

export default ReduxBooks;
