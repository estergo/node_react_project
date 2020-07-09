import React, { Fragment } from 'react';
import './App.scss';
import Nav from './general/nav';
import { BrowserRouter } from 'react-router-dom';
import Route from './general/route';

function App() {

  return (
    <Fragment>   
      <Nav />
      <BrowserRouter>
      <img alt="" className="background" src={require('./assets/background.jpg')} />
      <div className="main-content">
        <Route />
      </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

