import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productAction';
import * as checkoutActions from '../../actions/checkoutAction';
import ProductItemList from './ProductItemList';
import KartInfo from './KartInfo';


class ManageProductListPage extends React.Component {

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);

    }
    render() {
        const { products, kartItems } = this.props;
        return (
            <div>
                <KartInfo kartItems={kartItems}/>
                <ProductItemList productItems={products} addToCart={this.addToCart} />
            </div>

        );
    }

    addToCart(event, index, product) {
        console.log(this);
        console.log(index);
        console.log(product);

        let addtoCheckoutObj = [];

        addtoCheckoutObj.product = index;

        this.props.checkoutActions.addToCheckout(index, product);

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
