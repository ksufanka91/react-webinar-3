import "./style.css";
import {cn as bem} from "@bem-react/classname"
import {numberFormat} from "../../utils";
import PropTypes from "prop-types";
import {memo} from "react";

const ProductCard = (props) => {

  const cn = bem('ProductCard')

  const callbacks = {
    onAdd: (e) => props.onAdd(props.product._id),
  }

  return (
    <div className={cn()}>
      <div className={cn('item')}>{props.product.description}</div>
      <div className={cn('item')}>Страна производитель: <b>{props.product.madeIn?.title}</b></div>
      <div className={cn('item')}>Категория: <b>{props.product.category?.title}</b></div>
      <div className={cn('item')}>Год выпуска: <b>{props.product.edition}</b></div>
      <div className={cn('item', {price: true})}>Цена: <b>{numberFormat(props.product.price)} ₽</b></div>
      <button onClick={callbacks.onAdd}>Добавить</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    edition: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

ProductCard.defaultProps = {
  onAdd: () => {
  },
}

export default memo(ProductCard);