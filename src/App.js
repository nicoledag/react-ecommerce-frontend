import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Home from './containers/Home'
import Login from './components/Login'
import Register from './components/auth/Register'
import Logout from './components/Logout'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Navbar from './components/layout/Navbar'
import NewBusiness from './components/NewBusiness'
import Businesses from './components/Businesses'
import Search from './components/Search'
import { getCurrentUser } from "./actions/currentUser.js"


class App extends Component {

  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/v1/users')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() { 
    const { loggedIn, currentUser } = this.props
    return ( 
      <Router>
          <div className="App">
            <Navbar />
            <Logout />
            <Search />
            <Switch>           
              {/* <Route path='/logout' component={Logout} /> */}
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Register} />
              <Route path='/about' component={About} />
              <Route path='/wishlist' component={Wishlist} />
              <Route path='/cart' component={Cart} />
              <Route exact path='/business/new' component={NewBusiness} />
              <Route exact path='/business' component={Businesses} />
            </Switch>
          </div>
        
      </Router>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}
 
export default (connect(mapStateToProps, {getCurrentUser})(App));

