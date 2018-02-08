import Request from 'superagent';

const baseUrl = 'http://localhost:3000/api/order';

export function fetchOrders(callback) {
  const url = baseUrl;
  Request.get(url)
    .then((result) => {
      callback(null, result.body);
    }).catch((err) => {
      callback(err);
    });
}

export function extra() {}
