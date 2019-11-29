import React from 'react';
import Axios from 'axios';

import classes from './HomePage.module.css';

import { ProductList as ProductData } from '../../Utils/ProductListData';

import ABCard from '../../Components/ProductCard/ProductCard';
import ProgressLoader from '../../Components/ProgressLoader/ProgressLoader';
import { GETProductList } from '../../WebServices/APIController';

class HomePage extends React.Component {
  state = {
    showClothingList: true,
    showAccessoryList: true,
    productListData: ProductData,
    showLoader: true
  }

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

  componentDidMount() {
    GETProductList()
    .then(response => {
      this.setState({productListData: response, showLoader: false})
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const clothingProducts = this.state.productListData !== null ? this.state.productListData.filter(item => {
      return !item.isAccessory
    }).map(item => {
      return (
        <ABCard data={item} key={item.id} />
      )
    }) : []
  
    const accessoriesProducts = this.state.productListData !== null ? this.state.productListData.filter(item => {
      return item.isAccessory
    }).map(item => {
      return (
        <ABCard data={item} key={item.id} />
      )
    }) : null

    return (
      <div className={classes.App}>
      <ProgressLoader isLoading={this.state.showLoader}> 
        <section>
          <h2>Clothing for Men and Women</h2>
          <button onClick={() => this.onCardVisibilityBtnClick('clothing')}>{this.state.showClothingList ? "Hide List" : "Show List"}</button>
          {
            this.state.showClothingList ? <div className={classes.ProductGrid}>{clothingProducts}</div> : null
          }
          
        </section>
        <section>
          <h2>Accessories for Men and Women</h2>
          <button onClick={() => this.onCardVisibilityBtnClick('accessory')}>{this.state.showAccessoryList ? "Hide List" : "Show List"}</button>

          {
            this.state.showAccessoryList ? 
            <div className={classes.ProductGrid}>{accessoriesProducts}</div>
            : null
          }
        </section>
      </ProgressLoader>
      </div>
    );
  }
}

export default HomePage;