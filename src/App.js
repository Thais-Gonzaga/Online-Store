import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';

class App extends React.Component {
  render() {
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
