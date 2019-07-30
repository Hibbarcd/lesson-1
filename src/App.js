import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SignUpSignInPage from './pages/signIn-signup/signin-signup.component'


class App extends React.Component {
  constructor() {
    super() 

    this.state = { currentUser: null}

    }

    unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser : user})
      console.log(user)
    })
    }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

render() {
  return (
    <div className="App">
    <Header currentUser={this.state.currentUser} />
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignUpSignInPage}/>
    </Switch>
    </div>
  );
}
}


export default App;
