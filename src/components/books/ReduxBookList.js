import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../../redux/books/books';

const ReduxBookList = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteBook(id));
  return (
    <li>
      <span>{title}</span>
      <br />
      <span>{author}</span>
      <br />
      <button type="button" onClick={handleRemove}>Remove</button>
    </li>
  );
};

ReduxBookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ReduxBookList;
