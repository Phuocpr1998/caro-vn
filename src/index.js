import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './content/index.css';
// eslint-disable-next-line import/imports-first
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/gameplay/Game';
import rootReducer from './reducers';
import LoginContainer from './containers/login/LoginContainer';
import RegisterContainer from './containers/register/RegisterContainer';
import HomeContainer from './containers/home/HomeContainer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route path="/register">
          <RegisterContainer />
        </Route>
        <Route path="/play">
          <Game />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
