import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Switch>
            <Route path="/details/:productId/" component={ProductDetails} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
