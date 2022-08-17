import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import API from '../../api/Api';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';
import { fetchBooks } from '../../redux/books/books';

const ReduxBooks = () => {
  const books = useSelector((state) => state.books);
  console.log(books, 'useSe');
  const dispatch = useDispatch();

  useEffect(() => async () => {
    const booksObj = await axios.get(API);
    console.log(booksObj, 'bookObj');
    if (booksObj.data) {
      Object.keys(booksObj.data).forEach((itemId) => {
        const data = booksObj.data[itemId];
        const book = Object.assign({}, { item_id: itemId }, ...data);
        books.push(book);
      });
      return dispatch(fetchBooks());
    }
    return books;
  }, []);

  return (
    <div>
      <ul>
        {books.map((item) => (
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
