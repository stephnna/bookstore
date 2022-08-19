import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { deleteBookFromApi } from '../../redux/books/books';

const ReduxBookList = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(deleteBookFromApi(id));

  return (
    <li className="redux-book-list-li">
      <div className="redux-book-list-flex">
        <div>
          <span className="redux-book-list-category grey-color">{category}</span>
          <br />
          <br />
          <span className="redux-book-list-title">{title}</span>
          <br />
          <span className="dark-blue-color">{author}</span>
          <br />
          {' '}
          <br />
          {' '}
          <br />
          <button className="redux-book-list-button dark-blue-color" type="button">Comment</button>
          <button className="redux-book-list-button dark-blue-color" type="button" onClick={handleRemove}>Remove</button>
          <button className="redux-book-list-edit  dark-blue-color" type="button">Edit</button>
        </div>
        <div className="redux-book-list-middle">
          <div><span className="redux-book-list-circle" /></div>
          <div>
            <span className="redux-book-list-percent">
              {Math.floor(Math.random() * (100 - 1 + 1)) + 1}
              %
            </span>
            <br />
            <br />
            <span className="redux-book-list-curr">Completed</span>
          </div>
        </div>
        <div>
          <span className="redux-book-list-curr">CURRENT CHAPTER</span>
          <br />
          <br />
          <span>
            CHAPTER
            {Math.floor(Math.random() * (30 - 1 + 1)) + 1}
          </span>
          <br />
          <br />
          <button className="redux-book-btn white-color" type="button">UPDATE PROGRAM</button>
        </div>
      </div>
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
