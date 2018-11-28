import React, {PropTypes} from 'react';
import {Link} from 'react-router';

 
const ProductItemRow = ({product, index, addToCart, productCheckout}) => {
  return(
    <div className="col-sm-4 prodItem">
      <div className="card">
        <div className="prodImg">
          <img className="card-img-top" src={product.image} alt="Card image cap"/>
        </div>  
        <div className="card-body">
          <p className="card-text text-info title">{product.name}</p>
        </div>
        <div className="card-body">
          <p className="card-text text-dark">Price: ${product.price}</p>
        </div>
        <div className="card-body">
          <p className="card-text desc">{product.description}</p>
        </div>
        <div class="card-body">
          <a href="#" className="cartBtns" onClick={(e) => addToCart(e, index, product)} ><span className="glyphicon glyphicon-plus"></span> Add to Cart</a> 
          <a href="#" className="cartBtns" onClick={(e) => productCheckout(e, index, product)} ><span className="glyphicon glyphicon-shopping-cart"></span> Checkout</a>       
        </div>
      </div>
    </div>     
  );
}

ProductItemRow.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  productCheckout: PropTypes.func.isRequired
}

export default ProductItemRow;