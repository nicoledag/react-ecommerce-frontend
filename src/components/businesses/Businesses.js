import React from 'react';
import { Link } from 'react-router-dom'

const Businesses = (props) => {

    // console.log("business", props);
    console.log(props.currentUserBusinesses.businesses.businesses)

    let currentUserBusinesses = props ? props.currentUserBusinesses.businesses.businesses.map(business =>
       <div key={business.attributes.id}>
            <Link to={`/businesses/${business.attributes.id}`}>
                <li className="business-name"><b className="titlespacing">Business Name:</b> {business.attributes.name}</li>       
            </Link>

            <li className="business-id"><b className="titlespacing">Business Tax ID:</b>  {business.attributes.tax_id}</li>
            <li className="business-id"><b className="titlespacing">Created on:</b>  {new Date(`${business.attributes.created_at}`).toLocaleString().split(',')[0]}</li>
            <Link to={`/businesses/${business.attributes.id}/edit`}>Edit Business</Link>
            <br></br>
            <br></br>
        </div> 
        ) 
        : null

    return (
        <div className="businesses">
            <div className="wrapper">
                { currentUserBusinesses }
                <p className="business-para">Create a new business? <Link to="/businesses/new">Click here</Link></p>
            </div>
        </div>
    )
}

export default Businesses;