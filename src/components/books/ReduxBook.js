import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import { useEffect } from 'react';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';
import { fetchBooks } from '../../redux/books/books';

const ReduxBooks = () => {
  const  books = useSelector((state) => state.books); 
  console.log(books, 'books');
    books.map((item) =>  console.log(item, 'mapi'))
  const dispatch = useDispatch();

  useEffect(()  => { 
    dispatch(fetchBooks())}, [dispatch]); 
    

  return (
    <div>
      <ul>
        {books.map((book) => {
          console.log(book.title);
          <ReduxBookList
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}           
            category={book.category}
          />
})}
      </ul>
      <h1>ADD NEW BOOK</h1>
      <ReduxAddBookForm />
    </div>
  );
};

export default ReduxBooks;
