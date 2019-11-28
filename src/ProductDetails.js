import React, {Component} from 'react';

import {ProductList} from './ProductListData'

import classes from './ProductDetails.module.css';
import ProductImage from './ProductImage';

class ProductDetails extends Component {
    productData = ProductList[0];

    render() {
        const productImages = this.productData.photos.map((item, pos) => {
            return <ProductImage imgUrl={item} key={pos} />
        })

        return(
            <div className={classes.ProductDetails}>
                <div className={classes.MainContainer}>
                    <img className={classes.ProductPreview} src={this.productData.preview} alt="Apple Watch" />
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