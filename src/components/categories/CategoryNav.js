import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CategoryNav = (props) => {

  return (
    <div className="subcategories">
        <h2>Categories</h2>
        <br></br>
        {/* <Link to={`/category/${CategoryIdforLink}/subcategory` }> */}
            <div className="subcategory">
       
            </div>
        {/* </Link> */}
    </div>
  )


}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}

export default connect(mapStateToProps)(CategoryNav);