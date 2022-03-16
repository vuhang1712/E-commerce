import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Product from './components/Products/index';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Product />
    </Fragment>
  );
}

export default App;
