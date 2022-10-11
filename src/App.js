import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/product/:idproduct" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
