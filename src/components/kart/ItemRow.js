import React, {PropTypes} from 'react';
import {Link} from 'react-router';

 
const ItemRow = ({product, onClick}) => {
  return(
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={product.img} alt={product.id} width="35%"/>
        <div className="card-body">
          <p className="card-text">{product.id}</p>
        </div>
        <div className="card-body">
          <p className="card-text text-info">{product.name}</p>
        </div>
        <div className="card-body">
          <p className="card-text text-dark">{product.price}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{product.desc}</p>
        </div>
        <div className="card-body">            
            <a href="#" onClick={() => onClick(product.id)} class="badge badge-pill badge-primary" aria-pressed="true">Remove</a>
        </div>
      </div>
    </div>     
  );
}

ItemRow.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired
}

export default ItemRow;