import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import ProductCard from "../../components/product-card";
import useSelector from "../../store/use-selector";
import {memo, useCallback, useEffect} from "react";
import useStore from "../../store/use-store";
import {useParams} from "react-router-dom";

const Product = () => {
  let {productId} = useParams();

  useEffect(() => {
    store.actions.catalog.loadDetail(productId);
  }, [productId]);

  const store = useStore();

  const select = useSelector(state => ({
    product: state.catalog.product,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  return (
    <PageLayout>
      <Head title={select.product?.title || 'Загрузка...'}/>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum}/>
      {select.product && <ProductCard product={select.product} onAdd={callbacks.addToBasket}/>}
    </PageLayout>
  );
};

export default memo(Product);