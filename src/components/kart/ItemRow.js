import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ItemRowOperation from './ItemRowOperation';


 
const ItemRow = ({product, onClick, operation}) => {
  return(
    <div className="col-sm-3">
      <div className="card prodImgChk">
        <img className="card-img-top normalPadding" src={product.image} alt={product.id} width="50%"/>
        {/* <div className="card-body">
          <p className="card-text">{product.id}</p>
        </div> */}
        <div className="card-body">
          <p className="card-text text-info">{product.name}</p>
        </div>
        <div className="card-body">
          <p className="card-text text-dark"><strong>Total Price:</strong> ${product.price}</p>
        </div> 
        <div className="card-body">          
          <p className="card-text text-dark"><strong>Total Items:</strong> {product.count}</p>
        </div>
        {/* <div className="card-body">
          <p className="card-text text-dark">{product.description}</p>
        </div>         */}
        <ItemRowOperation product={product} onClick={onClick} operation={operation} />
      </div>
    </div>     
  );
}

ItemRow.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired
}

export default ItemRow;