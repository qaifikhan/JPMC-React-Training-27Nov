import React from 'react';
import HomePage from './HomePage';
import ProductDetails from './ProductDetails';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}
        <ProductDetails />
      </div>
    );
  }
}

export default App;
