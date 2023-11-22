import React from 'react';
import {createRoot} from 'react-dom/client';
import {createElement} from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  listCounter: 7,
  list: [
    {code: 1, title: 'Название элемента', selectionCounter: 0},
    {code: 2, title: 'Некий объект', selectionCounter: 0},
    {code: 3, title: 'Заголовок', selectionCounter: 0},
    {code: 4, title: 'Очень длинное название элемента из семи слов', selectionCounter: 0},
    {code: 5, title: 'Запись', selectionCounter: 0},
    {code: 6, title: 'Шестая запись', selectionCounter: 0},
    {code: 7, title: 'Седьмая запись', selectionCounter: 0},
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store}/>);
});

// Первый рендер приложения
root.render(<App store={store}/>);
