import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productAction';
import * as checkoutActions from '../../actions/checkoutAction';
import ProductItemList from './ProductItemList';
import KartInfo from './KartInfo';
import {browserHistory} from 'react-router';

class ManageProductListPage extends React.Component {

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.productCheckout = this.productCheckout.bind(this);
        this.getCartCount = this.getCartCount.bind(this);
    }
    render() {
        const { products, kartItems } = this.props;
        return (
            <div>
                <KartInfo count={this.getCartCount(kartItems)}/>
                <ProductItemList productItems={products} addToCart={this.addToCart} productCheckout={this.productCheckout}/>
            </div>

        );
    }

    getCartCount(kartItems){
        let count = 0;
        if(kartItems !== null){
            count = kartItems.reduce((acc, currValue, currIndex, array) => {
                acc = currValue.count + acc;
                return acc;
            }, 0);
        }
        return count;

    }
    addToCart(event, index, product) {
            this.props.checkoutActions.addToCheckout(index, product);
    }
    productCheckout(event, index, product) {
        this.addToCart(event, index, product);
        browserHistory.push('/checkout');
    }

}


ManageProductListPage.propTypes = {
    products: PropTypes.array.isRequired,
    kartItems: PropTypes.array.isRequired,
    checkoutActions: PropTypes.func.isRequired,
    productActions: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    let kartItems = [];
    if (state.checkout) {
        let checkoutItem = state.checkout[0];
        if (checkoutItem) {
            if (checkoutItem.product)
                kartItems = checkoutItem.product;
        }
        return {
            products: state.products,
            kartItems: kartItems
        };
    }
}
function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        checkoutActions: bindActionCreators(checkoutActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageProductListPage);
