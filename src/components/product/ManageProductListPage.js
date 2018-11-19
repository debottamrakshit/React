import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productAction';
import * as checkoutActions from '../../actions/checkoutAction';
import ProductListForm from './ProductListForm';


class ManageProductListPage extends React.Component{

    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);

    }
    render() {
        const {products} = this.props;
        return (
            <ProductListForm products={products} addToCart={this.addToCart} />   
        );
    }
        
    addToCart(event , index, product){
        console.log(this);
        console.log(index);
        console.log(product);
       
        let addtoCheckoutObj = []; 
    
        addtoCheckoutObj.product=index;   
        
        this.props.checkoutActions.addToCheckout(index, product);
        
    }

   }


ManageProductListPage.propTypes = {
    products: PropTypes.array.isRequired,
    checkoutActions: PropTypes.func.isRequired,
    productActions: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        products: state.products
    };
}
function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        checkoutActions: bindActionCreators(checkoutActions, dispatch)
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(ManageProductListPage);
