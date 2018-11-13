import React, {PropTypes} from 'react';
import Header from '../components/common/Header';
import {connect} from 'react-redux';

class App extends React.Component{

    constructor(state){
        super(state);
    }
    render(){
        return (
            <div className="container">
                <Header />  
                {this.props.children}      
            </div>
        );
    }
}
App.propTypes={
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        
        };
}
export default connect(mapStateToProps)(App);