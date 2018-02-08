import Request from 'superagent';

const baseUrl = 'http://localhost:3000/api/product';

export function fetchProducts(mode = null, value = '', cb) {
  let url = baseUrl;
  if (mode && value.length > 0) {
    url += `/search?${mode}=${value}`;
  }
  Request.get(url)
    .set('Content-Type', 'application/json')
    .end(cb);
}

export function fetchProduct(id, cb) {
  const url = `${baseUrl}/${id}`;
  Request.get(url)
    .set('Content-Type', 'application/json')
    .end(cb);
}

export function updateProduct(id, body, cb) {
  const url = `${baseUrl}/${id}`;
  Request.put(url)
    .set('Content-Type', 'application/json')
    .send(body)
    .end(cb);
}

export function deleteProduct(id, cb) {
  const url = `${baseUrl}/${id}`;
  Request.delete(url)
    .set('Content-Type', 'application/json')
    .end(cb);
}
