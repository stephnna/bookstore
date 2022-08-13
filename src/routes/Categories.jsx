import { Link } from 'react-router-dom';
const Categories = () => (
  <div>
     <div className='app-header'>
    <h1>BookStore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      {' '}  {' '}       
      <Link to="/categories">Categories</Link>
    </nav>
    </div>
    <button type='button'>Check Status</button>
  </div>
);

export default Categories;
