import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { deleteBook } from '../../redux/books/books';

const ReduxBookList = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemove =  () => dispatch(deleteBook(id));
  // window.location.reload();

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

ReduxBookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ReduxBookList;
