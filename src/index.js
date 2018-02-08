import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Navigation from './Navigation';
import ProductDetail from './components/ProductDetail';

const app = document.getElementById('root');

const routes = [
  {
    path: '/',
    exact: true,
    // eslint-disable-next-line react/jsx-filename-extension
    component: () => <Navigation />,
  },
  {
    path: '/products',
    exact: true,
    component: () => <App />,
  },
].map((route, index) => (
  <Route
    key={`route-${index}}`}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
));

ReactDOM.render(
  <Router>
    <Switch>
      {routes}
      <Route
        path="/products/:id"
        component={ProductDetail}
      />
    </Switch>
  </Router>,
  app,
);
