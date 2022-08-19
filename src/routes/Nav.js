import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="app-header">
    <h1 className="dark-blue-color">BookStore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      {' '}
      <Link to="/categories">Categories</Link>
    </nav>
  </div>
);

export default Nav;
