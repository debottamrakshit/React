import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
//import Main from '../components/kart/Main.js';
//import '../styles/styles.css';
import Header from '../components/common/Header';
import { ManageProductListPage } from './product/ManageProductListPage';

class App extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="app">
                <Header />
                {this.props.children}
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        loading: true
    };
}

export default connect(mapStateToProps)(App);
