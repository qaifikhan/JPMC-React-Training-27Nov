import React, {Component} from 'react';
import Axios from 'axios';

import {ProductList} from './ProductListData'

import classes from './ProductDetails.module.css';
import ProductImage from './ProductImage';

class ProductDetails extends Component {
    state = {
        productData: null,
        showLoader: true,
        currentSelectedImgPos: 0,
    }

    onProductImgClick = (pos) => {
        this.setState({currentSelectedImgPos: pos});
    }

    getDetails = (id) => {
        Axios.get('http://5d76bf96515d1a0014085cf9.mockapi.io/product/' + id)
        .then(response => {
            this.setState({ 
                showLoader: false, 
                productData: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        const productId = this.props.match.params.productId;
        this.getDetails(productId);
    }

    render() {
        const productImages = this.state.productData !== null ? this.state.productData.photos.map((item, pos) => {
            return <ProductImage imgUrl={item} key={pos} currentPos={this.state.currentSelectedImgPos} pos={pos} imgClick={this.onProductImgClick} />
        }) : [];

        return(
            <div className={classes.ProductDetails}>
                {
                    this.state.showLoader ? <h1>Loading...</h1>
                    : 
                    <div className={classes.MainContainer}>
                        <img className={classes.ProductPreview} src={this.state.productData.photos[this.state.currentSelectedImgPos]} alt="Apple Watch" />
                        <div>
                            <h1>{this.state.productData.name}</h1>
                            <h2>{this.state.productData.brand}</h2>
                            <div>
                                {productImages}
                            </div>
                            <h3>{this.state.productData.price}</h3>
                            <p>{this.state.productData.description}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ProductDetails;