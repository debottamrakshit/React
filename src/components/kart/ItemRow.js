import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ItemRowOperation from './ItemRowOperation';


 
const ItemRow = ({product, onClick, operation}) => {
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
        {/* <div className="card-body">
          <p className="card-text text-dark">{product.desc}</p>
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