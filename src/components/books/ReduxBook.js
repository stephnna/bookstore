import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import API from '../../api/Api';
import ReduxAddBookForm from './ReduxAddBookForm';
import ReduxBookList from './ReduxBookList';
import { fetchBooks } from '../../redux/books/books';

const ReduxBooks = () => {
  const books = useSelector((state) => state.books);
   
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchBooks());
  //   console.log(books, 'in useffec'); 
  // }, []);
  // console.log(books, 'out useffec'); 

// *****************

  useEffect(() =>  () => {
    return (dispatch) => {    
      dispatch({ type: GET_CURRENT_BOOKS });
      return axios.get(API).then(  
        books =>{ 
          console.log(books.data, 'data');           
          dispatch(fetchBooks())},
        err => dispatch({ type: GET_CURRENT_BOOKS_FAILURE, err })
      );
    };
    // const response = await axios.get(API);
    // result =  await response.json().catch((error) => new Error(error));

    //   console.log(result.data);
    //   console.log(result.status);
    //   console.log(result.statusText);
    //   console.log(result.headers);
    //   console.log(result.config);
   
    
    // console.log(booksObj, 'get');
    // if (booksObj.data) {
    //   Object.keys(booksObj.data).forEach((itemId) => {
    //     const data = booksObj.data[itemId];
    //     const book = Object.assign({}, { item_id: itemId }, ...data);
    //     books.push(book);
    //   });
    //   return dispatch(fetchBooks());
    // }
    // return books;
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <ReduxBookList
            key={book.item_id}            
            title={book.title}
            author={book.author}
            id={book.item_id}
            category={book.category}
          />
        ))}
      </ul>
      <h1>ADD NEW BOOK</h1>
      <ReduxAddBookForm />
    </div>
  );
};

export default ReduxBooks;
