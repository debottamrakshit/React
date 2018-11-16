import React, { Component,PropTypes } from 'react';
import ProductListRow from './ProductListRow';
//const products = this.props.products;
class ProductList extends Component {
  render(){
    let products = this.props.products;
    let renderProduct = this.renderProducts(products);
    return renderProduct;
  }

  renderProducts(products){
    if(products){
      return (
        <table className="table">
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>image</th>
          </tr>
          </thead>
          <tbody>
          {products.map(product =>
            <ProductListRow key={product.id} product={product}/>
          )}
          </tbody>
        </table>
      )
    }
    return null;
  }

}


export default ProductList;
