import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'


function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
