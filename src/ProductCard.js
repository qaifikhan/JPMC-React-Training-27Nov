import React from 'react';

import classes from './ProductCard.module.css';

const ProductCard = (props) => {
    console.log(props);
    return(
        <div className={classes.ProductCard}>
            <img className={classes.ProductImage} src={props.data.preview} alt={"Airpods"} />
            <h3>{props.data.name}</h3>
            <p>{props.data.brand}</p>
            <p>{"Rs" + props.data.price}</p>
        </div>
    );
}

export default ProductCard;