import React from 'react';
import classes from './HomePage.module.css';

import { ProductList as ProductData } from './ProductListData';

import ABCard from './ProductCard';

class HomePage extends React.Component {
  state = {
    showClothingList: true,
    showAccessoryList: true,
  }

  clothingProducts = ProductData.filter(item => {
    return !item.isAccessory
  }).map(item => {
    return (
      <ABCard data={item} key={item.id} />
    )
  })

  accessoriesProducts = ProductData.filter(item => {
    return item.isAccessory
  }).map(item => {
    return (
      <ABCard data={item} key={item.id} />
    )
  })

  onCardVisibilityBtnClick = (type) => {
    switch(type) {
      case 'clothing':
          this.setState((prevState, prevProps) => {
            return {showClothingList: !prevState.showClothingList}
          });
          break;
      case 'accessory':
          this.setState((prevState, prevProps) => {
            return {showAccessoryList: !prevState.showAccessoryList}
          });
          break;
      default:
          break;
    }
  }

  onAccessoryVisibilityBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return {showAccessoryList: !prevState.showAccessoryList}
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <section>
          <h2>Clothing for Men and Women</h2>
          <button onClick={() => this.onCardVisibilityBtnClick('clothing')}>{this.state.showClothingList ? "Hide List" : "Show List"}</button>
          {
            this.state.showClothingList ? <div className={classes.ProductGrid}>{this.clothingProducts}</div> : null
          }
          
        </section>
        <section>
          <h2>Accessories for Men and Women</h2>
          <button onClick={() => this.onCardVisibilityBtnClick('accessory')}>{this.state.showAccessoryList ? "Hide List" : "Show List"}</button>

          {
            this.state.showAccessoryList ? 
            <div className={classes.ProductGrid}>{this.accessoriesProducts}</div>
            : null
          }
        </section>
      </div>
    );
  }
}

export default HomePage;