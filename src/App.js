import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SignUpSignInPage from './pages/signIn-signup/signin-signup.component'
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {


    unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {

          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }

      setCurrentUser({userAuth})
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
    <Header />
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render= {
          () => this.props.currentUser ? 
          (<Redirect to='/' /> ) : 
          (< SignUpSignInPage/> 
            )}
            />
    </Switch>
    </div>
  );
}
}
//=====================================================redux code===================================================
const mapStateToProps = (state) =>  createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//==============================================================================================================

export default connect(
                      mapStateToProps,
                      mapDispatchToProps
                      )(App);
