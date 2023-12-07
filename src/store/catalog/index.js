import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: [],
      totalPages: 0,
      product: null,
    }
  }

  async load(page = 1, limit = 10) {
    const skip = limit * page - limit;
    const response = await fetch(`/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(_id, title, price),count`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items,
      totalPages: Math.ceil(json.result.count / limit)
    }, 'Загружены товары из АПИ');
  }

  async loadDetail(productId) {
    const response = await fetch(`/api/v1/articles/${productId}?fields=*,madeIn(title,code),category(title)`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      product: json.result,
    }, 'Загружена детальная карточка товара из АПИ');
  }
}

export default Catalog;
