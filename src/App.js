import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { user } from './reducers/user';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Members } from './components/Members';

const reducer = combineReducers({ user: user.reducer });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/About'></Route>
            <Route exact path='/Classes'></Route>
            <Route exact path='/Reviews'></Route>
            <Route exact path='/Members'>
              <Members />
            </Route>
            <Route exact path='/Contact'></Route>
          </Switch>
        </BrowserRouter>
      </main>
    </Provider>
  );
};
