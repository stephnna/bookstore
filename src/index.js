import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Categories from './routes/Categories';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <Provider store={store}>
            <App />
          </Provider>
)}
      />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>,
);
