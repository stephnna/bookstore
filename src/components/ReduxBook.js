import React from 'react';
import { useSelector } from 'react-redux';
// import { deleteBook } from '../redux/books/books';

const ReduxBooks = () => {
  const book = useSelector((state) => state.books);
  // const dispatch = useDispatch();
  console.log(book);

  return (
    book.map((item) => (
      <li key={item.id}>
        <span>{item.title}</span>
        <br />
        <span>{item.author}</span>
        <br />
        <button type="button">Remove</button>
      </li>
    ))
  );
};

export default ReduxBooks;
