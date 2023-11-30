import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {priceFormat} from "../../utils";
import Button from "../UI/button";

function Item({item, onAddItemToCart}) {
  return (
    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>
        {item.title}
        <span>{priceFormat(item.price)}</span>
      </div>

      <div className='Item-actions'>
        <Button onClick={() => onAddItemToCart(item.code)}>
          Добавить
        </Button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddItemToCart: PropTypes.func,
};

export default React.memo(Item);
