import React, {PropTypes} from 'react';
import {Link} from 'react-router';

 
const ItemRow = ({product, lable}) => {
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
          <Link to={'/product' + product.id}>Add To Kart</Link>  
          |
          <Link to={'/product' + product.id}>Checkout</Link>          
        </div>
      </div>
    </div>     
  );
}

ItemRow.propTypes = {
  product: PropTypes.object.isRequired,
  lable: PropTypes.object.isRequired

}

export default ItemRow;