import React from "react";
import {priceFormat} from "../../utils";
import PropTypes from "prop-types";
import './style.css';
import Button from "../UI/button";

const Cart = ({items, title, open, onClose, onDeleteItem}) => {
  const price = items.reduce((price, item) => price + (item.price * item.quantity), 0);

  return (
    <div className={'Cart' + (open ? ' Cart_open' : '')}>
      <div className="Cart-container">
        <div className="Cart-title-box">
          <h1 className="Cart-title">{title}</h1>
          <Button onClick={onClose}>Закрыть</Button>
        </div>

        <div className="Cart-items-wrapper">
          <div className="Cart-items">
            {items.length === 0 && <div className="Cart_empty">Корзина пуста</div>}
            {items.length > 0 &&
              <>
                {items.map(item => (
                  <div key={item.code} className="Cart-item">
                    <div className="Cart-item-number">{item.code}</div>
                    <div className="Cart-item-title">{item.title}</div>
                    <div className="Cart-item-price">{priceFormat(item.price)}</div>
                    <div className="Cart-item-quantity">{item.quantity} шт</div>
                    <div className="Cart-item-delete">
                      <Button onClick={() => onDeleteItem(item.code)}>Удалить</Button>
                    </div>
                  </div>
                ))}

                <div className="Cart-item Cart-purchase-sum">
                  <div className="Cart-item-number"/>
                  <div className="Cart-item-title"/>
                  <div className="Cart-item-price">Итого</div>
                  <div className="Cart-item-quantity Highlighted">{priceFormat(price)}</div>
                  <div className="Cart-item-delete"/>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default React.memo(Cart);
