import { Routes, Route } from 'react-router-dom';
import Nav from './routes/Nav';
import ReduxBooks from './components/books/ReduxBook';
import Categories from './components/categories/Categories';

const App = () => (
  <div className="app-padding">
    <Nav />
    <Routes>
      <Route path="/" element={<ReduxBooks />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
