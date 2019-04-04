import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.scss';
import Navbar from '../Navbar/Navbar';
import Store from '../Store/Store';

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
            <Switch>
              <Route path='/' exact render={() => <div>
                <h1>Home</h1>
                <p>HEY! Check out the store</p>
              </div>
              }>
              </Route>

              <Route path='/store' exact component={Store}></Route>

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
