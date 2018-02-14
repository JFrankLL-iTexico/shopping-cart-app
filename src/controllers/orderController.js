import Request from 'superagent';

const baseUrl = 'http://10.40.10.53:3000/api/order';

export function fetchOrders(cb) {
  const url = baseUrl;
  Request.get(url)
    .set('Content-Type', 'application/json')
    .end(cb);
}

export function insertOrder(body, cb) {
  const url = baseUrl;
  Request.post(url)
    .set('Content-Type', 'application/json')
    .send(body)
    .end(cb);
}
