import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import DashboardProductsContainer from './containers/DashboardProductsContainer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Navbar from './components/layout/Navbar'
import NewBusiness from './components/NewBusiness'
import Businesses from './components/Businesses'
import CategoryProducts from './components/categories/CategoryProducts'
import SubCategoryProducts from './components/categories/SubCategoryProducts'
import Search from './components/dashboard/Search'
import Footer from './components/layout/Footer'
import { getCurrentUser } from "./actions/currentUser.js"
import { fetchCategories } from "./actions/category.js"

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchCategories()
  }


  render() {

    return ( 
      <div className="App">
        <Navbar />
        {/* <Search /> */} 
        {/* <Footer /> */}
        
        <Switch>           
          <Route exact path='/' component={DashboardProductsContainer} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/business/new' component={NewBusiness} />
          <Route exact path='/business' component={Businesses} />
          <Route exact path='/category/:id/products' component={CategoryProducts} />
          <Route exact path='/subcategory/:id/products' component={SubCategoryProducts} />
        </Switch>
      </div>
    );
  }

}
 
export default connect(null, { getCurrentUser, fetchCategories } )(App);

