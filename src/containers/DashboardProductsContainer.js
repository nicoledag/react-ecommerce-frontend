import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from "../actions/category.js"
import { fetchSubcategories } from "../actions/subcategory.js"
import Categories from '../components/categories/Categories.js'


class DashboardProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchSubcategories()
      }
 
    render() { 
        // const { categories } = this.props
        // console.log("pass", categories)
        // debugger;
      
        return ( 
          <div className="main">
             <Categories categoriesList={this.props} />
             <li>Image 1</li>
          </div>
         );
      }
  }

    const mapStateToProps = state => {
        // console.log("mapStateToProps", state);
          return {
            categories: state.businessReducer,
            // subcategories: state.businessReducer,
          };    
    }
 
export default connect(mapStateToProps, { fetchCategories, fetchSubcategories })(DashboardProductsContainer);


