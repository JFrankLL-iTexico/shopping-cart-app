import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import ProductDetail from './components/ProductDetail';

const app = document.getElementById('root');

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/products',
    exact: true,
    component: () => <App />,
  },
  {
    path: '/about',
    exact: true,
    component: () => <About />,
  },
].map((route, index) => (
  <Route
    key={`route-${index}}`}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
));


const unlistedRoutes = [
  {
    path: '/products/:id',
    component: ProductDetail,
  },
].map((route, index) => (
  <Route
    key={`unlisted-route-${index}}`}
    path={route.path}
    component={route.component}
  />
));

ReactDOM.render(
  <Router>
    <Switch>
      {routes}
      {unlistedRoutes}
    </Switch>
  </Router>,
  app,
);
