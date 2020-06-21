import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { MembersPage } from 'components/MembersPage';
import { user } from './reducers/user';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { MembersLogin } from './components/MembersLogin';
import { SignUp } from './components/SignUp';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Classes } from './components/Classes'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  

}

body {
  padding: 0;
  margin: 0;
  // overflow-x: hidden;

 
  
 
}
`

const reducer = combineReducers({ user: user.reducer });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/About'>
              <About />
            </Route>
            <Route exact path='/Classes'>
              <Classes />
            </Route>
            <Route exact path='/Reviews'>
              <Reviews />
            </Route>
            <Route exact path='/LogIn'>
              <MembersLogin />
            </Route>
            <Route exact path='/Signup'>
              <SignUp />
            </Route>
            <Route exact path='/Members'>
              <MembersPage />
            </Route>
            <Route exact path='/Contact'>
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </main>
    </Provider>
  );
};
