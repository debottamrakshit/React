import React, {PropTypes} from 'react';
import ProductItemRow from './ProductItemRow';


const ProductItemList = ({productItems, addToCart}) => {
    return(
        <div className="container">
            <div className="row">
                {productItems.map((item, i) =>
                       <ProductItemRow index={i} product={item} addToCart={addToCart} /> 
                )};              
            </div>
        </div> 

    ); 
};

ProductItemList.propTypes = {
    productItems: PropTypes.array.isRequired,
    addToCart:PropTypes.func.isRequired
};

export default ProductItemList;

