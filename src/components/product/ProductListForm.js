import React, { Component,PropTypes } from 'react';

import ProductList from './ProductList';

class ProductListForm extends Component {
    constructor(props, context) {
        super(props, context);
    }
   
    render() {
        const products = this.props.products;
        return (
          <div>
              <ProductList products={products} addToCart={this.props.addToCart}/>
          </div>
        );
    }


}
ProductListForm.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
  };
export default ProductListForm;
