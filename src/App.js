import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const App = props => {
    return (
        <div className="app">
            <div className="header">
                Header
            </div>
            <div className="panel-container">
                <div className="panel cart-panel"><Cart /></div>
                <div className="panel products-panel"><ProductList /></div>
            </div>
        </div>
    );
}

export default App;