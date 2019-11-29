import React, {Component} from 'react';
import Axios from 'axios';

import {ProductList} from '../../Utils/ProductListData'

import classes from './ProductDetails.module.css';
import ProductImage from '../../Components/ProductImage/ProductImage';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProgressLoader from '../../Components/ProgressLoader/ProgressLoader';

class ProductDetails extends Component {
    state = {
        productData: ProductList[0],
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
        console.log(this.props);
        console.log('Component Did Mount');
        const productId = this.props.match.params.productId;
        this.getDetails(productId);
    }

    componentDidUpdate() {
        console.log(this.props);
        console.log('Component Did Update');
        const productId = this.props.match.params.productId;
        this.getDetails(productId);
    }

    render() {
        const productImages = this.state.productData !== null ? this.state.productData.photos.map((item, pos) => {
            return <ProductImage imgUrl={item} key={pos} currentPos={this.state.currentSelectedImgPos} pos={pos} imgClick={this.onProductImgClick} />
        }) : [];

        const adProducts = ProductList.map(item => {
            return <ProductCard data={item} forAdSection={true} />
        })

        return(
            <div className={classes.ProductDetails}>
                <ProgressLoader isLoading={this.state.showLoader}>
                    <div className={classes.MainContainer}>
                        <img className={classes.ProductPreview} src={this.state.productData.photos!==null?this.state.productData.photos[this.state.currentSelectedImgPos]:null} alt="Apple Watch" />
                        <div className={classes.ProductDataSection}>
                            <h1>{this.state.productData.name}</h1>
                            <h2>{this.state.productData.brand}</h2>
                            <div>
                                {productImages}
                            </div>
                            <h3>{this.state.productData.price}</h3>
                            <p>{this.state.productData.description}</p>
                        </div>
                        
                        <div className={classes.AdSection}>
                            {adProducts}
                        </div>
                    </div>
                </ProgressLoader>
            </div>
        );
    }
}

export default ProductDetails;