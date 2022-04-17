import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Product from './components/Products/index';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Product />
    </>
  );
}

export default App;
