import Request from 'superagent';

const baseUrl = 'http://localhost:3000/api/product';

export function fetchProducts(mode = null, value = '', cb) {
  let url = baseUrl;
  if (mode && value.length > 0) {
    url += `/search?${mode}=${value}`;
  }
  Request.get(url)
    .then((result) => {
      cb(null, result.body);
    }).catch((err) => {
      cb(err);
    });
}

export function fetchProduct(id, cb) {
  const url = `${baseUrl}/${id}`;
  Request.get(url)
    .then((result) => {
      cb(null, result.body);
    }).catch((err) => {
      cb(err);
    });
}

export function deleteProduct(id, cb) {
  const url = `${baseUrl}/${id}`;
  Request.delete(url)
    .then((result) => {
      cb(null, result.text);
    }).catch((err) => {
      cb(err);
    });
}
