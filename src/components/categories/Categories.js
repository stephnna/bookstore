import { useSelector, useDispatch } from 'react-redux';
import Nav from '../../routes/Nav';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const alertStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusChecker = () => dispatch(checkStatus());
  return (
    <div>
      <Nav />
      <button type="button" onClick={statusChecker}>Check Status</button>
      <h5>{alertStatus}</h5>
    </div>
  );
};

export default Categories;
