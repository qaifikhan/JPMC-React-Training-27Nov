import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './Containers/HomePage/HomePage';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import Topbar from './Components/Topbar/Topbar';
import NotFound from './Containers/NotFoundPage/NotFound';
import { NOT_FOUND, NOT_FOUND_PAGE, HOME_PAGE, PRODUCT_DETAILS_PAGE, LOGIN_PAGE, COUNTER_PAGE } from './Utils/RouteEndpoints';
import LoginPage from './Containers/LoginPage/LoginPage';
import CounterPage from './Containers/CounterPage/CounterPage';

class App extends React.Component {
  state = {
    userLoggedIn: false,
  }

  onUserLoggedIn = () => {
    this.setState({userLoggedIn: true});
  }

  onUserLoggedOut = () => {
    this.setState({userLoggedIn: false});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar loggedInStatus={this.state.userLoggedIn} onUserLoggedOut={this.onUserLoggedOut} />
          <Switch>
            <Route path={PRODUCT_DETAILS_PAGE + ":productId/"} render={(props) => {
              return this.state.userLoggedIn ? <ProductDetails {...props} history={props.history} /> : <Redirect to={LOGIN_PAGE} />
            } } />
            <Route path={NOT_FOUND_PAGE} component={NotFound} />
            <Route path={LOGIN_PAGE} render={(props) => <LoginPage {...props} onUserLoggedIn={this.onUserLoggedIn} />} />
            <Route path={COUNTER_PAGE} component={CounterPage} />
            <Route exact path={HOME_PAGE} component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
