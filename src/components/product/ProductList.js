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
    
      return (
        <div className="row">
          {products.map(product =>
            <ProductListRow key={product.id} product={product}/>
          )}
          </div>

      )
    
  }

}


export default ProductList;
