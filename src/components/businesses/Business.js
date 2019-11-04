import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Business extends Component {
    state = {  }
    render() { 
        let currentBusiness = this.props.businesses.businesses.filter(business => business.id === this.props.match.params.id)[0]
        console.log("currentBusiness", currentBusiness)
    
        let currentBusinessProducts = currentBusiness ? currentBusiness.attributes.products.map(product =>
            <div key={product.id}>
                <Link to={`/businesses/${product.business_id}/products/${product.id}`}>
                
                <br></br>
                <li className="product-name"> <b className="titlespacing">Product Name:</b> {product.name}</li>
                </Link>
                <li className="product-text"><b className="titlespacing">Description:</b> {product.description}</li>
                <li className="product-text"><b className="titlespacing">Item Number:</b> {product.item_number}</li>
                      
            </div>
            ) : null
    

            return (
                <div className="businesses">
                    <div className="wrapper">
                        {/* NEED TO REDIRECT IF NOT CURRENT BUSINESS */}
                        <li className="business-name"><b className="titlespacing">Business Name:</b> {currentBusiness ? currentBusiness.attributes.name :null}</li>       
                        <li className="business-id"><b className="titlespacing">Business Tax ID:</b>  {currentBusiness ? currentBusiness.attributes.tax_id: null}</li>
                        <br></br>
                        { currentBusinessProducts }
                    </div> 
                </div>
            )
        
    }
}
 


const mapStateToProps = state => {
      return {
        businesses: state.businessReducer
      };    
}

export default connect(mapStateToProps)(Business);