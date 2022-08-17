import { v4 as uuidv4 } from 'uuid';
 const FETCH_CURRENT_BOOKS   = 'FETCH_CURRENT_BOOKS';
 const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
 const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
const BOOK_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uFn9a1RzT4ZLk57GWuFK/books';

const ADD_BOOK = 'appBook/books/ADD_BOOK';
const DELETE_BOOK = 'appBook/books/DELETE_BOOK';

const initialBooks = [];
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
      case FETCH_CURRENT_BOOKS:
        return action.payload

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// export const addScore = async () => {
//   const response = await fetch(BOOK_API, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(),
//   });
//   console.log(response.text());
//   return response.json();
// };

// const fetchBooks = async () => {
//   const response = await fetch(BOOK_API);
//   const result  = await response.text().catch((error) => new Error(error));
//   console.log(result, 'fet'); 
// }



//  const fetchBooks = () => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_CURRENT_BOOKS });
//     return fetch(BOOK_API).then(      
//       books =>{ 
//         console.log(books.text());
//         dispatch({ type: FETCH_BOOKS_SUCCESS, books })
//       },
//       err => dispatch({ type: FETCH_BOOKS_FAILURE, err })
//     );
//   };  
// };
// fetchBooks();


export const addBook = (title, author) => ({
  type: ADD_BOOK,
  id: uuidv4(),
  title,
  author,
});

export const retrieveBooks = () => async (dispatch) => {
  try {
    const response = await fetch(BOOK_API);
    const result  = await response.text();
    const resObj = JSON.parse(result)    
    console.log(resObj, 'resObj');
    dispatch({
      type: FETCH_CURRENT_BOOKS,
      payload: resObj,
    });
  } catch (err) {
    console.log(err);
  }
};

// initialBooks
// export const addBook = (title, author) => async (dispatch) => {
//   try {
//     const result = await TutorialDataService.create({ title, description });
//     dispatch({
//       type: CREATE_TUTORIAL,
//       payload: result.data,
//     });
//     return Promise.resolve(result.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// ***********

// export const fetchBooks = () => {
//   return (dispatch) => {
//     dispatch(fetchProductsBegin());
//     return fetch("/products")
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchProductsSuccess(json.products));
//         return json.products;
//       })
//       .catch(error => dispatch(fetchProductsFailure(error)));
//   };
// }

// // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
