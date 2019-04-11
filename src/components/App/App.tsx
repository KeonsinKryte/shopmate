import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './_App.scss';
import Navbar from '../Navbar/Navbar';
import Store from '../Store/Store';
import Filter from '../Filter/Filter';
import storage from '../../storage/storage';
import Product from '../Product/Product';

class App extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="app__container row">
              <Route path='/' exact component={Filter}></Route>
            <Switch>
              <Route path='/' exact component={Store}></Route>
            </Switch>
          </div>
              <Route path='/product/' component={Product}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
