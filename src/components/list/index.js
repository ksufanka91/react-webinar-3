import React from "react";
import './style.css';
import PropTypes from 'prop-types';
import Item from "../item";

function List({list, onAddItemToCart}) {
  return (
    <div className='List'>
      {list.map(item => (
        <div key={item.code} className='List-item'>
          <Item item={item} onAddItemToCart={onAddItemToCart}/>
        </div>
      ))}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  onAddItemToCart: PropTypes.func
};

export default React.memo(List);
