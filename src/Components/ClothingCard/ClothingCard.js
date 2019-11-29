import React from 'react';

import classes from './ClothingCard.module.css';

const ClothingCard = (props) => {
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

export default ClothingCard;