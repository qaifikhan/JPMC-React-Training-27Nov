import React from 'react';

import classes from './ProductImage.module.css';

const ProductImage = (props) => {
    const isActive = props.currentPos === props.pos;

    return(
        <img className={[classes.ProductImages, isActive? classes.Active : null].join(' ')} src={props.imgUrl} alt="Product" onClick={() => props.imgClick(props.pos)} />
    );
}

export default ProductImage;