import React from "react";
import {morph, priceFormat} from "../../utils";
import './style.css';
import PropTypes from 'prop-types';
import Button from "../UI/button";

function Controls({openCart, cartItems}) {
  const quantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

  const price = cartItems.reduce((price, item) => price + (item.price * item.quantity), 0);

  return (
    <div className='Controls'>
      <span>В корзине:</span>
      <span className="Highlighted">
        {cartItems.length === 0
          ? 'пусто'
          : quantity + ' ' + morph(quantity, 'товар', 'товара', 'товаров') + ' / ' + priceFormat(price)
        }
      </span>

      <Button onClick={openCart}>Перейти</Button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

export default React.memo(Controls);
