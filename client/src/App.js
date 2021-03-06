import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getBooks } from './actions/books';
import { getGenres } from './actions/genres';
import './App.css';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer';
import Main from './components/Main';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
