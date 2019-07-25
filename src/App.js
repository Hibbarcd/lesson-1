import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SignUpSignInPage from './pages/signIn-signup/signin-signup.component'

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignUpSignInPage}/>
    </Switch>
    </div>
  );
}

export default App;
