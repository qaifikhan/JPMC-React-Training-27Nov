import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import NotFound from './NotFound';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Switch>
            <Route path="/details/:productId/" component={ProductDetails} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
