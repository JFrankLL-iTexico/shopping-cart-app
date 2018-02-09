import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './components/products/Products';
import Home from './components/home/Home';
import About from './components/about/About';
import ProductDetail from './components/products/ProductDetail';

const app = document.getElementById('root');

const routesList = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/products',
    exact: true,
    component: () => <Products />,
  },
  {
    path: '/about',
    exact: true,
    component: () => <About />,
  },
];

const routes = routesList.map((route, index) => (
  <Route
    key={`route-${index.toString()}}`}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
));


const unlistedRoutesList = [
  {
    path: '/products/:id',
    component: ProductDetail,
  },
];

const unlistedRoutes = unlistedRoutesList.map((route, index) => (
  <Route
    key={`unlisted-route-${index.toString()}}`}
    path={route.path}
    component={route.component}
  />
));

ReactDOM.render(
  <Router>
    <Switch>
      <Navigation />
      {routes}
      {unlistedRoutes}
    </Switch>
  </Router>,
  app,
);
