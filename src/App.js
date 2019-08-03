import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          )
        })
      }
      this.setState({currentUser: userAuth})


      createUserProfileDocument(userAuth)
      console.log(userAuth)
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
