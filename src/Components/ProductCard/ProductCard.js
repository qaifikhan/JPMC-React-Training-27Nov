import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ProductCard.module.css';

const ProductCard = (props) => {
    console.log(props);
    const classList = [classes.ProductCard];
    if(props.forAdSection) {
        classList.push(classes.AdProductCard);
    }

    return(
        <div className={classList.join(' ')}>
            <Link to={'/details/' + props.data.id}>
                <img className={classes.ProductImage} src={props.data.preview} alt={"Airpods"} />
                <h3>{props.data.name}</h3>
                <p>{props.data.brand}</p>
                <p>{"Rs" + props.data.price}</p>
            </Link>
        </div>
    );
}

export default ProductCard;