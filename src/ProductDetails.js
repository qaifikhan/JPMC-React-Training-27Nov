import React, {Component} from 'react';

import {ProductList} from './ProductListData'

import classes from './ProductDetails.module.css';
import ProductImage from './ProductImage';

class ProductDetails extends Component {
    state = {
        currentSelectedImgPos: 1,
    }

    productData = ProductList[0];

    onProductImgClick = (pos) => {
        this.setState({currentSelectedImgPos: pos});
    }

    render() {
        const productImages = this.productData.photos.map((item, pos) => {
            return <ProductImage imgUrl={item} key={pos} currentPos={this.state.currentSelectedImgPos} pos={pos} imgClick={this.onProductImgClick} />
        })

        return(
            <div className={classes.ProductDetails}>
                <div className={classes.MainContainer}>
                    <img className={classes.ProductPreview} src={this.productData.photos[this.state.currentSelectedImgPos]} alt="Apple Watch" />
                    <div>
                        <h1>{this.productData.name}</h1>
                        <h2>{this.productData.brand}</h2>
                        <div>
                            {productImages}
                        </div>
                        <h3>{this.productData.price}</h3>
                        <p>{this.productData.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;