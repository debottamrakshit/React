import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productAction';
import ProductListForm from './ProductListForm';


class ManageProductListPage extends React.Component{

    constructor(props){
        super(props);
        this.setState({ isLoading: true });

    }
    render() {
        const {products} = this.props;
        return (
            this.state == null || this.state.isLoading ? null : <ProductListForm products={products}/>   
        );
    }
    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
        setTimeout(() => this.setState({ isLoading: false }), 1500);
      }
}


ManageProductListPage.propTypes = {
    products: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("1");
    console.log(state);
    return{
        products: state.products
    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(productActions, dispatch)
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(ManageProductListPage);
