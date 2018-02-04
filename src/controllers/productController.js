import Request from 'superagent';

const baseUrl = 'http://localhost:3000/api/product';

export function fetchProducts(mode = null, value = '', callback) {
  let url = baseUrl;
  if (mode && value.length > 0) {
    url += `/search?${mode}=${value}`;
  }
  Request.get(url)
    .then((result) => {
      callback(null, result.body);
    }).catch((err) => {
      callback(err);
    });
}

export function deleteProduct(id, callback) {
  const url = `${baseUrl}/${id}`;
  Request.delete(url)
    .then((result) => {
      callback(null, result.text);
    }).catch((err) => {
      callback(err);
    });
}
