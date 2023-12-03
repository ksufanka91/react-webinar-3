import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from "./components/cart";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const {list, cartItems, openCart} = store.getState();

  const callbacks = {
    onAddItemToCart: useCallback((code) => {
      store.addItemToCart(code);
    }, [store]),

    onDeleteItem: useCallback((code) => {
      store.deleteItemFromCart(code);
    }, [store]),

    onOpenCart: useCallback(() => {
      store.openCart();
    }, [store]),

    onCloseCart: useCallback(() => {
      store.closeCart();
    }, [store]),
  }

  // console.log(cartItems)

  // LIST
  // showQuantity - bool
  // onAddItemToCart - если указан, то выводишь кнопку Добавить
  // onDeleteItemToCart - если указан, то выводишь кнопку Удалить

  return (
    <PageLayout>
      <Head title="Магазин"/>
      <Controls openCart={callbacks.onOpenCart} cartItems={cartItems}/>

      <List list={list} onAddItemToCart={callbacks.onAddItemToCart}/>

      <Modal title="Корзина" open={openCart} onClose={callbacks.onCloseCart}>
        <Cart items={cartItems} onDeleteItem={callbacks.onDeleteItem}/>
      </Modal>
    </PageLayout>
  );
}

export default App;
