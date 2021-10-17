import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBooks } from './actions/books';
import { getGenres } from './actions/genres';
import './App.css';
import { Header } from './components/Header.js';
import Main from './components/Main';

const App = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getGenres());
    console.log(state);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
