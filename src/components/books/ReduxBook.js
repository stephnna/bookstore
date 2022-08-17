import React from 'react';
import { useSelector } from 'react-redux';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';

const ReduxBooks = () => {
  const book = useSelector((state) => state.books);
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
