import React from 'react';
import { Link } from 'react-router-dom'

const Categories = (props) => {
    
    console.log("categories props", props)
    // console.log("categoriesList.categories is", props.categoriesList.categories)
       
    return (
        <div className="categories">
            {props.categoriesList.categories ? props.categoriesList.categories.map(category => 
            <div key={category.id}>
           
            <Link to={`/category/${category.id}` }>
                {/* <li className="categories-image">{ category.attributes.image }</li> */}
                <li className="categories-image"> <img src={ category.attributes.image } width="300" height="200"></img></li>
                <li className="categories-text">{ category.attributes.name } </li>
             </Link>
            </div>
            )
            : null
        }
       </div>
     )
}

export default Categories;

