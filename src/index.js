import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './content/index.css';
// eslint-disable-next-line import/imports-first
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/gameplay/Game';
import rootReducer from './reducers';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/play">
          <Game />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
