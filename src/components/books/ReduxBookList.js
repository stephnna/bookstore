import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { deleteBook } from '../../redux/books/books';

const ReduxBookList = (props) => {  
  const {id, title, author, category } = props;
  console.log(props,  'props');
  const dispatch = useDispatch();

  const handleRemove = async () => {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uFn9a1RzT4ZLk57GWuFK/books/${id}`,
    );
    dispatch(deleteBook(id));
    // window.location.reload();
  };

  return (
    <li>
      <span>{title}</span>
      <br />
      <span>{author}</span>
      <br />
      <span>{category}</span>
      <br />
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>
  );
};

// ReduxBookList.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// };

export default ReduxBookList;
