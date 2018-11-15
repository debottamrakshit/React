import React, {PropTypes} from 'react';


const ItemRow = ({product}) => {
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
          <a href="#" class="card-link">Remove</a>
        </div>
      </div>
    </div>     
  );
}

ItemRow.propTypes = {
  product: PropTypes.object.isRequired
}

export default ItemRow;