import { Link } from 'react-router-dom';
import Books from './components/Book';
import AddBook from './components/AddBook';

const App = () => (
  <div>
    <div className="app-header">
      <h1>BookStore CMS</h1>
      <nav>
        <Link to="/">Books</Link>
        {' '}
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
    <Books />
    <h1>ADD NEW BOOK</h1>
    <AddBook />
  </div>
);

export default App;
