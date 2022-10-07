import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';


class App extends React.Component{
render () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
      </Switch>
    </BrowserRouter>
  );
}
}
export default App;
