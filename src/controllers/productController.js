import Request from 'superagent';

const baseUrl = 'http://10.40.10.53:3000/api/product';

export function fetchProducts(paramObj, cb) {
  const {
    category,
    name,
    page,
    items,
  } = paramObj;
  const pagesParams = `page=${page}&items=${items}`;
  const searchParams = `category=${category}&name=${name}`;
  const url = `${baseUrl}?${searchParams}&${pagesParams}`;
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
