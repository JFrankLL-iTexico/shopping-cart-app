import * as ProductsController from '../controllers/productController';

export function fetchProducts(query = {}) {
  return {
    type: 'GET_PRODUCTS',
    payload: new Promise((resolve, reject) => {
      query = {
        category: '',
        name: '',
        page: 0,
        items: 10,
        ...query,
      };
      ProductsController.fetchProducts(query, (err, result) => {
        if (!err) {
          resolve(result.body);
        }
        reject(err);
      });
    }),
  };
}

export function foo() {}
