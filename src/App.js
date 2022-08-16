import { Link } from 'react-router-dom';
import ReduxBooks from './components/ReduxBook';
import ReduxAddBook from './components/ReduxAddBook';

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
    <div>
      <ul>
        <ReduxBooks />
      </ul>
      <h1>ADD NEW BOOK</h1>
      <ReduxAddBook />
    </div>
  </div>
);

export default App;
