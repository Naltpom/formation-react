import { useState } from "react";

import './CarItem.scss';

function CarItem(props) {
    const { produit } = props;
    const { price, name } = produit;
    const [ quantity, setQuantity ] = useState(1);
    const total = price * quantity;

    function addQt() {
        setQuantity(quantity + 1);
    }
    function rmQt() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="CarItem">
            <div className="CarItem__title title">{name}</div>
            <div>{price}€</div>
            <div>nb : {quantity}</div>
            <div><button onClick={addQt}>+</button></div>
            <div><button onClick={rmQt}>-</button></div>
            <div total={total}>Total = {total}€</div>
        </div>
    );
}

export default CarItem;