const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function morph(number, wordOne, wordTwo, wordFive) {
  number = Math.abs(number) % 100;
  const number2 = number % 10;

  if (number > 10 && number < 20) {
    return wordFive;
  }
  if (number2 > 1 && number2 < 5) {
    return wordTwo;
  }
  if (number2 === 1) {
    return wordOne;
  }
  return wordFive;
}
