import React, {PropTypes} from 'react';
import {Link} from 'react-router';

 
const ProductItemRow = ({product, index, addToCart}) => {
  return(
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={product.img} alt="Card image cap" width="35%"/>
        <div className="card-body">
          <p className="card-text text-info">{product.name}</p>
        </div>
        <div className="card-body">
          <p className="card-text text-dark">{product.price}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{product.desc}</p>
        </div>
        <div class="card-body">
          <a href="#" onClick={(e) => addToCart(e, index, product)} >Button</a> 
          |
          <Link to="/checkout" activeClassName="active">Checkout</Link>        
        </div>
      </div>
    </div>     
  );
}

ProductItemRow.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductItemRow;