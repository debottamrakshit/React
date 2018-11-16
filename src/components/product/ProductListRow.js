import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td><a href={product.watchHref} target="_blank">Watch</a></td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
