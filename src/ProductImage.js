import React from 'react';

import classes from './ProductImage.module.css';

const ProductImage = (props) => {
    return(
        <img className={classes.ProductImages} src={props.imgUrl} alt="Product" />
    );
}

export default ProductImage;