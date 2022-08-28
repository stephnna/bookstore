import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav className="nav-header">
      <h1 className="dark-blue-color">BookStore CMS</h1>
      <ul className="nav-left">
        <li className="first-li"><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Nav;
