import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from "../../actions/category.js"
import Carosel from '../Carosel'
import Categories from '../products/Categories.js'


class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchCategories()
      }
    
    render() { 

        // const { categories } = this.props
        // console.log("pass", categories)
        // debugger;
      
        return ( 
            <div className = "wrapper">
                <br></br>
                <Carosel />
                <br></br>
                <Categories categoriesList={this.props.categories} />
            </div> 

           
         );
    }
}

    const mapStateToProps = state => {
        console.log("mapStateToProps", state);
          return {
            categories: state.categoryReducer
          };
      
    }
 
export default connect(mapStateToProps, { fetchCategories })(Dashboard);


