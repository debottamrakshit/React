import React, { Component,PropTypes } from 'react';
import ProductListRow from './ProductListRow';
//const products = this.props.products;
class ProductList extends Component {
  render(){
    let products = this.props.products;
    let addToCart = this.props.addToCart;
    let renderProduct = this.renderProducts(products, addToCart);
    return renderProduct;
  }

  renderProducts(products, addToCart){
    
      return (
        <div className="row">
          {products.map((product, i) =>
            <ProductListRow index={i} product={product} addToCart={addToCart}/>
          )}
          </div>

      )
    
  }

}
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductList;
