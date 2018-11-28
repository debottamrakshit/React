import React, {PropTypes} from 'react';
import ProductItemRow from './ProductItemRow';


const ProductItemList = ({productItems, addToCart, productCheckout}) => {
    return(
        <div className="container prodList">
            <div className="row">
                {productItems.map((item, i) =>
                       <ProductItemRow index={i} product={item} addToCart={addToCart} productCheckout={productCheckout}/> 
                )};              
            </div>
        </div> 

    ); 
};

ProductItemList.propTypes = {
    productItems: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    productCheckout: PropTypes.func.isRequired
};

export default ProductItemList;

