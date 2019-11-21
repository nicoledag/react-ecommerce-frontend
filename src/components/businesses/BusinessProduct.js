import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../actions/product'
import { Redirect } from 'react-router-dom'
import ProductsContainer from '../../containers/ProductsContainer'


class BusinessProduct extends Component {
    constructor(props){
        super(props);

    // console.log("BusinessProduct", this.props); 
    }


    handleDelete = (productId) => {
        let businessId = this.props.product.business_id;
        this.props.deleteProduct(productId, businessId);
        this.props.history.push(`/businesses/${businessId}`);
    }


    
    render() { 

        const { loggedIn } = this.props;
     
        if (!loggedIn) return <Redirect to='/' />

        let editLink =  this.props.product ? <Link to={`/businesses/${this.props.product.business_id}/products/${this.props.product.id}/edit`} className="edit-link">Edit Product</Link> : null

        let linkBusiness =  this.props.product ? <Link to={`/businesses/${this.props.product.business_id}`} className="edit-link">Link Back to Products</Link> : null
        
        return(
            <div className="main">
                <div className="product-main">
                    <div className="product-flex">
                        <div className="product col-5">
                            <li className="product-image">{this.props.product ? <img src={ this.props.product.image } alt="product" ></img> : null}</li>
                        </div>
                    </div>
        
                    <div className="product-info col-7">
                        {linkBusiness}
                        <br></br>
                    
                        <h3>Product Details</h3>
                        <li className="product-text"> <b className="titlespacing">Category Name:</b> {this.props.product ? this.props.product.category_name : null}</li>
                        <li className="product-text"> <b className="titlespacing">Subcategory Name:</b> {this.props.product ? this.props.product.subcategory_name : null}</li>
                        <li className="product-text"> <b className="titlespacing">Product Name:</b> {this.props.product ? this.props.product.name : null}</li>
                        <li className="product-text"><b className="titlespacing">Description:</b> {this.props.product ? this.props.product.description : null}</li>
                        <li className="product-text"><b className="titlespacing">Item Number:</b> {this.props.product ? this.props.product.item_number : null}</li>
                        <li className="product-text"><b className="titlespacing" >Price:</b> ${this.props.product ? this.props.product.price : null}</li>
                        {editLink}

                        <br></br>
                        <button onClick={() => this.handleDelete(`${this.props.product.id}`)} className="product-delete-button">Delete Product</button>
                        <br></br>
                        <br></br>

                        <h3>Color Section</h3>
                        <ProductsContainer product={this.props} />
                        
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>     
                </div>
            </div>
        )
    
        }
}
 
const mapStateToProps = state => {
    return {
      loggedIn: !!state.currentUser,
    };    
}

export default connect(mapStateToProps, { deleteProduct })(BusinessProduct);