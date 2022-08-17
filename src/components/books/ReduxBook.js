import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';
import { retrieveBooks } from '../../redux/books/books';


const ReduxBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);
  const book = useSelector((state) => state.books);
  console.log(book, 'books');
  return (
    <div>
      <ul>
        {book.map((item) => (
          <ReduxBookList
            key={item.id}
            title={item.title}
            author={item.author}
            id={item.id}
          />
        ))}
      </ul>
      <h1>ADD NEW BOOK</h1>
      <ReduxAddBookForm />
    </div>
  );
};

export default ReduxBooks;
