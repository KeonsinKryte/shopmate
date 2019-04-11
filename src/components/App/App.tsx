import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './_App.scss';
import Navbar from '../Navbar/Navbar';
import Store from '../Store/Store';
import Filter from '../Filter/Filter';
import storage from '../../storage/storage';

class App extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="App__container">
            <Filter />
            <Switch>
              <Route path='/' exact component={Store}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
